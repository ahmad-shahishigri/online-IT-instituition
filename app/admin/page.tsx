import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import EnrollmentsTable from './enrollments-table'

// Password check function
async function checkPassword(formData: FormData): Promise<boolean> {
  'use server'
  
  const password = formData.get('password')
  // Yahan apna password set karein (e.g., "admin123")
  return password === 'ahmadshahi05'
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const supabase = await createClient()
  
  // Check if password is already set in session
  const isAuthenticated = searchParams.authenticated === 'true'

  if (!isAuthenticated) {
    return (
      <main style={{ 
        fontFamily: 'Arial, sans-serif',
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            margin: '0 0 20px 0', 
            color: '#2c3e50',
            fontSize: '28px'
          }}>
            🔒 Admin Login
          </h1>
          <p style={{ 
            color: '#7f8c8d', 
            marginBottom: '30px',
            fontSize: '16px'
          }}>
            Enter password to access the dashboard<b>(only admin)</b>
          </p>
          
          <form action={async (formData) => {
            'use server'
            const isValid = await checkPassword(formData)
            if (isValid) {
              redirect('/admin?authenticated=true')
            } else {
              redirect('/admin?error=invalid')
            }
          }}>
            <input
              type="password"
              name="password"
              placeholder="Enter admin password"
              style={{
                width: '100%',
                padding: '15px',
                margin: '10px 0',
                border: '2px solid #ecf0f1',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              required
            />
            
            {searchParams.error === 'invalid' && (
              <p style={{ 
                color: '#e74c3c', 
                margin: '10px 0',
                fontSize: '14px'
              }}>
                ❌ Invalid password. Please try again.
              </p>
            )}
            
            <button
              type="submit"
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                fontSize: '16px',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                marginTop: '15px',
                fontWeight: 'bold'
              }}
            >
              🚀 Unlock Dashboard
            </button>
          </form>
          
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#95a5a6' }}>
            <Link href="/" style={{ color: '#3498db', textDecoration: 'none' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // If authenticated, show the dashboard
  const { data: enrollments, error } = await supabase
    .from('enrollments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Error loading enrollments</h1>
        <p>{error.message}</p>
        <Link href="/" style={{ color: 'blue' }}>Go Back Home</Link>
      </div>
    )
  }

  return (
    <main style={{ 
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* Header with Logout */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#2c3e50' }}>🎓 Admin Dashboard</h1>
          <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>
            Total Enrollments: <strong>{enrollments?.length || 0}</strong>
          </p>
        </div>
        <Link 
          href="/admin"
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          🔓 Logout
        </Link>
      </div>

      {/* Use the Client Component for interactive parts */}
      <EnrollmentsTable enrollments={enrollments || []} />

      {/* Navigation */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link 
          href="/" 
          style={{
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
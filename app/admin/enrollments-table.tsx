'use client'

import React from 'react'
import Link from 'next/link'

// Define the interface for enrollment data
interface Enrollment {
  id: number
  name: string
  email: string
  contact: string
  address: string
  course: string
  message: string
  created_at: string
}

// Define the props interface for the component
interface EnrollmentsTableProps {
  enrollments: Enrollment[]
}

const EnrollmentsTable: React.FC<EnrollmentsTableProps> = ({ enrollments }) => {
  // Helper function to find most popular course
  const getMostPopularCourse = (enrollments: Enrollment[]) => {
    const courseCount: { [key: string]: number } = {}
    enrollments.forEach(e => {
      courseCount[e.course] = (courseCount[e.course] || 0) + 1
    })
    
    const mostPopular = Object.entries(courseCount).reduce((a, b) => 
      a[1] > b[1] ? a : b, ['', 0]
    )
    
    return mostPopular[0] || 'None'
  }

  const handleViewDetails = (enrollment: Enrollment) => {
    alert(`Enrollment Details:\nName: ${enrollment.name}\nEmail: ${enrollment.email}\nCourse: ${enrollment.course}\nMessage: ${enrollment.message || 'No message'}`)
  }

  return (
    <>
      {/* Enrollments Table */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflowX: 'auto'
      }}>
        {enrollments && enrollments.length > 0 ? (
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Contact</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Course</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment, index) => (
                <tr 
                  key={enrollment.id}
                  style={{ 
                    borderBottom: '1px solid #ecf0f1',
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                  }}
                >
                  <td style={{ padding: '12px' }}>{enrollment.id}</td>
                  <td style={{ padding: '12px', fontWeight: '500' }}>
                    {enrollment.name}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <a href={`mailto:${enrollment.email}`} style={{ color: '#3498db' }}>
                      {enrollment.email}
                    </a>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <a href={`tel:${enrollment.contact}`} style={{ color: '#27ae60' }}>
                      {enrollment.contact}
                    </a>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      {enrollment.course}
                    </span>
                  </td>
                  <td style={{ padding: '12px', color: '#7f8c8d' }}>
                    {new Date(enrollment.created_at).toLocaleDateString('en-PK')}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <button
                      onClick={() => handleViewDetails(enrollment)}
                      style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h3 style={{ color: '#7f8c8d' }}>No enrollments found</h3>
            <p>Students will appear here when they enroll through the form.</p>
            <Link 
              href="/enroll" 
              style={{
                display: 'inline-block',
                backgroundColor: '#3498db',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                marginTop: '10px'
              }}
            >
              Test Enrollment Form
            </Link>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      {enrollments && enrollments.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{
            backgroundColor: '#e8f6f3',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: 0, color: '#16a085' }}>Today</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a085' }}>
              {enrollments.filter(e => 
                new Date(e.created_at).toDateString() === new Date().toDateString()
              ).length}
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#ebf5fb',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: 0, color: '#2980b9' }}>This Week</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2980b9' }}>
              {enrollments.filter(e => {
                const weekAgo = new Date()
                weekAgo.setDate(weekAgo.getDate() - 7)
                return new Date(e.created_at) > weekAgo
              }).length}
            </p>
          </div>

          <div style={{
            backgroundColor: '#f4ecf7',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: 0, color: '#8e44ad' }}>Popular Course</h3>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#8e44ad' }}>
              {getMostPopularCourse(enrollments)}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default EnrollmentsTable
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContactCardListProps {
  // No props needed currently, as data is internal
}

const ContactCardList: React.FC<ContactCardListProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12; // Display 12 cards per page

  // Mock Data for Contacts (moved from AccountDetailsPage.tsx)
  const contacts = [
    { name: 'YourCompany, Joel Willis', title: 'Bayomer, United States', email: 'jest-willo@example.com', phone: '123-456-7890', avatar: 'https://picsum.photos/seed/yourcompany/50/50' },
    { name: 'Azure Interior, Coliten Diaz', title: 'Business Execu Ties Allura', email: 'colleen.als@example.com', phone: '987-654-3210', avatar: null },
    { name: 'Ready Mat, Billy Fox', title: 'Redrctor TSupervisor at Ready Mat', email: 'ryourname@example.com', phone: '555-123-4567', avatar: 'https://picsum.photos/seed/readymat/50/50' },
    { name: 'Oman Oil Company', title: 'Muscat, Oman', email: 'info@oman-oil.com', phone: '111-222-3333', avatar: null },
    { name: 'Omantel', title: 'Muscat, Oman', email: 'contact@omantel.om', phone: '444-555-6666', avatar: 'https://picsum.photos/seed/omantel/50/50' },
    { name: 'National Bank of Oman', title: 'Muscat, Oman', email: 'contact@nbo.om', phone: '777-888-9999', avatar: null },
    { name: 'Beth Evans', title: 'United States', email: 'bothovarie@example.com', phone: '123-123-1234', avatar: 'https://picsum.photos/seed/bethevans/50/50' },
    { name: 'Your logo', title: 'Vendor / Office Supplies', email: 'yourname@yourcompany.com', phone: '234-234-2345', avatar: null },
    { name: 'My Company', title: 'Sair Francsso, Unities', email: 'yourname@yourcompany.com', phone: '345-345-3456', avatar: 'https://picsum.photos/seed/mycompany/50/50' },
    { name: 'Global Tech Solutions', title: 'New York, USA', email: 'info@globaltech.com', phone: '100-200-3000', avatar: null },
    { name: 'Innovate Systems', title: 'London, UK', email: 'contact@innovate.co.uk', phone: '101-202-3030', avatar: 'https://picsum.photos/seed/innovatesystems/50/50' },
    { name: 'Future Forward Inc.', title: 'Tokyo, Japan', email: 'sales@futurefwd.jp', phone: '102-203-3040', avatar: null },
    { name: 'Apex Ventures', title: 'Sydney, Australia', email: 'support@apex.au', phone: '103-204-3050', avatar: 'https://picsum.photos/seed/apexventures/50/50' },
    { name: 'Quantum Innovations', title: 'Berlin, Germany', email: 'hello@quantum.de', phone: '104-205-3060', avatar: null },
    { name: 'Digital Dynamics', title: 'Paris, France', email: 'contact@digitaldyn.fr', phone: '105-206-3070', avatar: 'https://picsum.photos/seed/digitaldynamics/50/50' },
    { name: 'Bright Spark Solutions', title: 'Toronto, Canada', email: 'info@brightspark.ca', phone: '106-207-3080', avatar: null },
    { name: 'Pinnacle Corp', title: 'Dubai, UAE', email: 'office@pinnacle.ae', phone: '107-208-3090', avatar: 'https://picsum.photos/seed/pinnaclecorp/50/50' },
    { name: 'Horizon Enterprises', title: 'Singapore', email: 'reachus@horizon.sg', phone: '108-209-3100', avatar: null },
    { name: 'Elite Strategies', title: 'Rio de Janeiro, Brazil', email: 'client@elite.br', phone: '109-210-3110', avatar: 'https://picsum.photos/seed/elitestrategies/50/50' },
  ];

  // Calculate the total number of pages
  const totalPages = Math.ceil(contacts.length / cardsPerPage);

  // Get current cards for the page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = contacts.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {currentCards.map((contact, index) => (
          <Link to="/crm" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-card hover-effect" style={{ background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '24px', display: 'flex', alignItems: 'center', gap: '15px', width: '100%', height: '180px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eeeeee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {contact.avatar ? (
                  <img src={contact.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '1.6rem', fontWeight: '500', color: '#616161' }}>{contact.name.charAt(0)}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#00a09d' }}>{contact.name}</div>
                <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📍</span>{contact.title}</div>
                {contact.email && <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📧</span>{contact.email}</div>}
                {contact.phone && <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📞</span>{contact.phone}</div>}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}></div>

              {/* Hover Details Text */}
              <div className="contact-card-details-hover">
                <span>Details</span>
                <span style={{ color: '#00a09d', fontWeight: '600' }}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '20px' }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ padding: '10px 15px', margin: '0 5px', border: '1px solid #ddd', borderRadius: '5px', cursor: 'pointer', backgroundColor: currentPage === 1 ? '#f0f0f0' : '#ffffff', color: currentPage === 1 ? '#999' : '#333' }}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            style={{ padding: '10px 15px', margin: '0 5px', border: '1px solid #ddd', borderRadius: '5px', cursor: 'pointer', backgroundColor: currentPage === i + 1 ? '#00a09d' : '#ffffff', color: currentPage === i + 1 ? '#ffffff' : '#333' }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ padding: '10px 15px', margin: '0 5px', border: '1px solid #ddd', borderRadius: '5px', cursor: 'pointer', backgroundColor: currentPage === totalPages ? '#f0f0f0' : '#ffffff', color: currentPage === totalPages ? '#999' : '#333' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactCardList; 
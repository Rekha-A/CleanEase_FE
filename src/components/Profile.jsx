import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import BookingsTab from './BookingsTab';
const Profile = () => {
  // Retrieve user details from local storage
  const user = JSON.parse(localStorage.getItem('currentUser'));
  

  

  

  return (
    <Container className="mt-5" style={{ backgroundImage: `url(https://media.istockphoto.com/id/517751222/photo/modern-office-door.jpg?s=1024x1024&w=is&k=20&c=K-Mt6x_bi-kcsZ1CsFphdE0b-72rSkJjxdU46ymbdIQ=)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row>
        <Col>
          <Tabs>
            <TabList>
              <Tab>About Me</Tab>
              <Tab>Bookings</Tab>
            </TabList>

            <TabPanel>
              <h2>About Me</h2>
              {user ? (
                <div>
                  <p><strong>Name:</strong> {user.username}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Is Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}</p>
                </div>
              ) : (
                <p>User details not found</p>
              )}
            </TabPanel>
            <TabPanel>
              <BookingsTab />
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

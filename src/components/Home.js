import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="Bicycle-1 (4).jpg"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="Bicycle-1 (1).jpg"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="Bicycle-1 (5).jpg"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          leftBtnText="Custom order"
          rightBtnText="Exisiting inventory"
          backgroundImg="Bicycle-1 (7).jpg"
        />
        <Section
          title="Lowest Cost E-Bicycle's in India"
          description="Money-back guarantee"
          backgroundImg="Bicycle-1 (8).jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section
          title="E-Bicycle for New India"
          description="E-Bicycle cost less than a Bike and is polution free"
          backgroundImg="Bicycle-1 (6).jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
        <Section
          title="E-Bicycle for New Generation"
          description="Rechargeable,Low-Maintenance,Low-Fuel Cost "
          backgroundImg="Bicycle-1 (7).jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
        />
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

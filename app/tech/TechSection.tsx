import React from 'react'
import Section from './Section'
import { TechStack, Database, Framework, VSC } from './icons'

function TechSection() {
  return (
    <>
        <Section SectionName={TechStack}/>
        <Section SectionName={Database} Text1="Data" Text2="base" start="true"/>
        <Section SectionName={Framework} Text1="Libries and " Text2="Frameworks"/>
        <Section SectionName={VSC} Text1="Version Con" Text2="trol System" start="true"/>
    </>
  )
}

export default TechSection
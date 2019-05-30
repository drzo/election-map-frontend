import { buildLeadingPartyExpression, buildLeadingPartyLegend } from './utils'

const partyColors = [
  {abbr: 'ANC', name: 'AFRICAN NATIONAL CONGRESS', colors: ['rgb(252,187,161)', 'rgb(252,146,114)', 'rgb(251,106,74)', 'rgb(239,59,44)', 'rgb(203,24,29)', 'rgb(153,0,13)']},
  {abbr: 'DA', name: 'DEMOCRATIC ALLIANCE', colors: ['rgb(198,219,239)', 'rgb(158,202,225)', 'rgb(107,174,214)', 'rgb(66,146,198)', 'rgb(33,113,181)', 'rgb(8,69,148)']}
]

const otherColors = ['rgb(217,217,217)', 'rgb(189,189,189)', 'rgb(150,150,150)', 'rgb(115,115,115)', 'rgb(82,82,82)', 'rgb(37,37,37)']

export const styleExpression = (ballot) => buildLeadingPartyExpression(ballot, partyColors, otherColors)

export const legend = buildLeadingPartyLegend(partyColors, otherColors)
import Amiens from './Amiens.json'
import Besancon from './Besancon.json'
import Brisbane from './Brisbane.json'
import BruxellesCapitale from './Bruxelles-Capitale.json'
import CergyPontoise from './Cergy-Pontoise.json'
import Creteil from './Creteil.json'
import Dublin from './Dublin.json'
import Goteborg from './Goteborg.json'
import Kazan from './Kazan.json'
import Lillestrom from './Lillestrom.json'
import Ljubljana from './Ljubljana.json'
import Lund from './Lund.json'
import Luxembourg from './Luxembourg.json'
import Lyon from './Lyon.json'
import Marseille from './Marseille.json'
import Mulhouse from './Mulhouse.json'
import Namur from './Namur.json'
import Nancy from './Nancy.json'
import Nantes from './Nantes.json'
import Rouen from './Rouen.json'
import Santander from './Santander.json'
import Seville from './Seville.json'
import Stockholm from './Stockholm.json'
import Toulouse from './Toulouse.json'
import Toyama from './Toyama.json'
import Valence from './Valence.json'
import Vilnius from './Vilnius.json'

const mapStation = station => ({
  address: station.address,
  id: station.name,
  latitude: station.latitude,
  longitude: station.longitude,
  number: station.number,
  freeBikes: '-',
  emptySpaces: '-',
})

export const byId = {
  Amiens: {
    area: [
      { latitude: 49.961764, longitude: 2.199751 }, // top left
      { latitude: 49.959113, longitude: 2.389951 }, // top right
      { latitude: 49.833938, longitude: 2.396131 }, // bottom right
      { latitude: 49.838367, longitude: 2.203184 }, // bottom left
    ],
    stations: Amiens.map(mapStation),
  },
  Besancon: {
    area: [
      { latitude: 47.331212, longitude: 5.915107 },
      { latitude: 47.332492, longitude: 6.10814 },
      { latitude: 47.192697, longitude: 6.113118 },
      { latitude: 47.193163, longitude: 5.889958 },
    ],
    stations: Besancon.map(mapStation),
  },
  Brisbane: {
    area: [
      { latitude: -26.880771, longitude: 152.699968 },
      { latitude: -26.883221, longitude: 153.631059 },
      { latitude: -28.079587, longitude: 153.782121 },
      { latitude: -28.06747, longitude: 152.52968 },
    ],
    stations: Brisbane.map(mapStation),
  },
  'Bruxelles-Capitale': {
    area: [
      { latitude: 50.946958, longitude: 4.155178 },
      { latitude: 50.942632, longitude: 4.546566 },
      { latitude: 50.751005, longitude: 4.545193 },
      { latitude: 50.750136, longitude: 4.196377 },
    ],
    stations: BruxellesCapitale.map(mapStation),
  },
  'Cergy-Pontoise': {
    area: [
      { latitude: 49.093766, longitude: 1.996242 },
      { latitude: 49.096913, longitude: 2.167903 },
      { latitude: 48.991594, longitude: 2.161037 },
      { latitude: 48.988891, longitude: 1.981136 },
    ],
    stations: CergyPontoise.map(mapStation),
  },
  Creteil: {
    area: [
      { latitude: 48.815745, longitude: 2.407806 },
      { latitude: 48.817328, longitude: 2.4878 },
      { latitude: 48.757158, longitude: 2.49192 },
      { latitude: 48.75829, longitude: 2.412613 },
    ],
    stations: Creteil.map(mapStation),
  },
  Dublin: {
    area: [
      { latitude: 53.7004, longitude: -7.077924 },
      { latitude: 53.63531, longitude: -5.990278 },
      { latitude: 53.002011, longitude: -5.957319 },
      { latitude: 52.973903, longitude: -6.830732 },
    ],
    stations: Dublin.map(mapStation),
  },
  Goteborg: {
    area: [
      { latitude: 57.763234, longitude: 11.721141 },
      { latitude: 57.783739, longitude: 12.155101 },
      { latitude: 57.640693, longitude: 12.178447 },
      { latitude: 57.649512, longitude: 11.712901 },
    ],
    stations: Goteborg.map(mapStation),
  },
  Kazan: {
    area: [
      { latitude: 55.954128, longitude: 48.753665 },
      { latitude: 55.951052, longitude: 49.386752 },
      { latitude: 55.656989, longitude: 49.412844 },
      { latitude: 55.646916, longitude: 48.771518 },
    ],
    stations: Kazan.map(mapStation),
  },
  Lillestrom: {
    area: [
      { latitude: 59.987823, longitude: 10.967283 },
      { latitude: 59.987479, longitude: 11.090193 },
      { latitude: 59.933513, longitude: 11.101179 },
      { latitude: 59.933312, longitude: 10.989478 },
    ],
    stations: Lillestrom.map(mapStation),
  },
  Ljubljana: {
    area: [
      { latitude: 46.186972, longitude: 14.319752 },
      { latitude: 46.189825, longitude: 14.73174 },
      { latitude: 45.952593, longitude: 14.72762 },
      { latitude: 45.949728, longitude: 14.349965 },
    ],
    stations: Ljubljana.map(mapStation),
  },
  Lund: {
    area: [
      { latitude: 55.738121, longitude: 13.132164 },
      { latitude: 55.738701, longitude: 13.260223 },
      { latitude: 55.677576, longitude: 13.25782 },
      { latitude: 55.678931, longitude: 13.13903 },
    ],
    stations: Lund.map(mapStation),
  },
  Luxembourg: {
    area: [
      { latitude: 50.217349, longitude: 5.672559 },
      { latitude: 50.203287, longitude: 6.631117 },
      { latitude: 49.423492, longitude: 6.570692 },
      { latitude: 49.425279, longitude: 5.625868 },
    ],
    stations: Luxembourg.map(mapStation),
  },
  Lyon: {
    area: [
      { latitude: 45.827372, longitude: 4.711782 },
      { latitude: 45.825458, longitude: 4.932195 },
      { latitude: 45.688922, longitude: 4.926015 },
      { latitude: 45.699473, longitude: 4.739248 },
    ],
    stations: Lyon.map(mapStation),
  },
  Marseille: {
    area: [
      { latitude: 43.403216, longitude: 5.221708 },
      { latitude: 43.412195, longitude: 5.630949 },
      { latitude: 43.148257, longitude: 5.622709 },
      { latitude: 43.150261, longitude: 5.253294 },
    ],
    stations: Marseille.map(mapStation),
  },
  Mulhouse: {
    area: [
      { latitude: 47.791906, longitude: 7.249664 },
      { latitude: 47.794213, longitude: 7.402099 },
      { latitude: 47.708343, longitude: 7.402099 },
      { latitude: 47.708805, longitude: 7.237304 },
    ],
    stations: Mulhouse.map(mapStation),
  },
  Namur: {
    area: [
      { latitude: 50.534407, longitude: 4.653453 },
      { latitude: 50.540516, longitude: 5.044841 },
      { latitude: 50.360383, longitude: 5.042094 },
      { latitude: 50.363887, longitude: 4.689159 },
    ],
    stations: Namur.map(mapStation),
  },
  Nancy: {
    area: [
      { latitude: 48.736102, longitude: 6.085117 },
      { latitude: 48.739272, longitude: 6.259525 },
      { latitude: 48.650892, longitude: 6.255405 },
      { latitude: 48.652253, longitude: 6.09885 },
    ],
    stations: Nancy.map(mapStation),
  },
  Nantes: {
    area: [
      { latitude: 47.316464, longitude: -1.687259 },
      { latitude: 47.331358, longitude: -1.364535 },
      { latitude: 47.155152, longitude: -1.405734 },
      { latitude: 47.162622, longitude: -1.673526 },
    ],
    stations: Nantes.map(mapStation),
  },
  Rouen: {
    area: [
      { latitude: 49.474735, longitude: 1.017445 },
      { latitude: 49.474735, longitude: 1.162327 },
      { latitude: 49.413795, longitude: 1.169193 },
      { latitude: 49.416252, longitude: 1.017445 },
    ],
    stations: Rouen.map(mapStation),
  },
  Santander: {
    area: [
      { latitude: 43.538043, longitude: -4.115407 },
      { latitude: 43.530078, longitude: -3.6993 },
      { latitude: 43.376553, longitude: -3.725393 },
      { latitude: 43.406491, longitude: -4.04125 },
    ],
    stations: Santander.map(mapStation),
  },
  Seville: {
    area: [
      { latitude: 37.500762, longitude: -6.128866 },
      { latitude: 37.499673, longitude: -5.828115 },
      { latitude: 37.316411, longitude: -5.832235 },
      { latitude: 37.315319, longitude: -6.141225 },
    ],
    stations: Seville.map(mapStation),
  },
  Stockholm: {
    area: [
      { latitude: 59.433087, longitude: 17.850556 },
      { latitude: 59.421911, longitude: 18.255676 },
      { latitude: 59.275587, longitude: 18.229584 },
      { latitude: 59.279796, longitude: 17.945313 },
    ],
    stations: Stockholm.map(mapStation),
  },
  Toulouse: {
    area: [
      { latitude: 43.700541, longitude: 1.281949 },
      { latitude: 43.691605, longitude: 1.551801 },
      { latitude: 43.506128, longitude: 1.545621 },
      { latitude: 43.521067, longitude: 1.304608 },
    ],
    stations: Toulouse.map(mapStation),
  },
  Toyama: {
    area: [
      { latitude: 36.867363, longitude: 136.858017 },
      { latitude: 36.88494, longitude: 137.808334 },
      { latitude: 36.262925, longitude: 137.802841 },
      { latitude: 36.271783, longitude: 136.84703 },
    ],
    stations: Toyama.map(mapStation),
  },
  Valence: {
    area: [
      { latitude: 44.970426, longitude: 4.828064 },
      { latitude: 44.980141, longitude: 4.994919 },
      { latitude: 44.881459, longitude: 4.985306 },
      { latitude: 44.879026, longitude: 4.821884 },
    ],
    stations: Valence.map(mapStation),
  },
  Vilnius: {
    area: [
      { latitude: 54.866396, longitude: 24.924367 },
      { latitude: 54.875879, longitude: 25.569814 },
      { latitude: 54.541066, longitude: 25.550588 },
      { latitude: 54.550625, longitude: 24.951833 },
    ],
    stations: Vilnius.map(mapStation),
  },
}

export const list = Object.keys(byId).map(id => ({
  id,
  name: id,
}))

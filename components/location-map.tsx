type LocationMapProps = {
  compact?: boolean;
};

export default function LocationMap({compact = false}: LocationMapProps) {
  return (
    <div className="location-map-panel">
    <div className={`location-map${compact ? ' location-map-compact' : ''}`}>
      <iframe
        title="La Koutoubia, avenue Mohammed V à Marrakech"
        src="https://www.google.com/maps?q=Koutoubia+Mosque%2C+Avenue+Mohammed+V%2C+Marrakech%2C+Morocco&z=16&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="map-location-details"><address><strong>La Koutoubia</strong><span>Avenue Mohammed V, Marrakech 40000, Maroc</span></address><a href="https://www.google.com/maps/search/?api=1&query=Koutoubia+Mosque%2C+Marrakech" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir La Koutoubia dans Google Maps (nouvel onglet)">Google Maps <span aria-hidden="true">↗</span></a></div>
    </div>
  );
}

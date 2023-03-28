import { useState } from 'react';

export default function MyPage() {
  const [datesBooked, setDatesBooked] = useState(null);

  const handleGetVenue = async () => {
    const response = await fetch('https://blushing-plum-belt.cyclic.app/api/admin/get-venue-by-name?name=Venue 1 Healing Detox');
    const data = await response.json();
    setDatesBooked(data.datesBooked);
  };

  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sapiente quis veniam, ratione ipsam iusto voluptatum rerum magnam illum ducimus accusantium! Dolorem quis magni accusantium culpa cum, assumenda dicta facilis!
      Et recusandae a, libero, ut, alias officiis assumenda magnam delectus distinctio iusto nam minima? Sapiente cumque voluptatibus fugiat officia, cupiditate sit recusandae distinctio enim rem esse eos voluptate quae eveniet?
      Iure minus sunt, repellendus unde iste neque. A, odio illum commodi atque voluptatum laborum fugit consequuntur sint dolorum perspiciatis, aperiam nobis cumque ea? Eaque culpa accusamus, ipsam omnis tempora at.
      Asperiores praesentium consequatur magnam architecto accusamus atque, ea iure. Totam, accusantium facilis iste cumque veritatis voluptatum ratione, optio porro saepe quaerat aspernatur. Sint, voluptates. Magnam minus officiis ipsa fugiat voluptates?
      Vitae, cum vel consectetur, aliquam quam inventore illo harum labore corporis exercitationem possimus, sed explicabo ipsum pariatur a sequi aut neque reprehenderit consequuntur dolores necessitatibus! Quo veniam sed unde illum!
      <button onClick={handleGetVenue}>Get Venue</button>
      {datesBooked && <p>Dates Booked: {datesBooked}</p>}
    </div>
  );
}

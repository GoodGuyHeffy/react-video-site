import React from 'react';

function Customers() {

    const products = [
        {
          id: 1,
          title: 'John Doe',
          subtitle: "Fast shipping, excellent customer service."
        },
        {
          id: 2,
          title: 'Officer K',
          subtitle: "Purchased WP RNVG's and shipping was incredibly fast, would purchase from Twilight again."
        },
        {
          id: 3,
          title: 'Driver',
          subtitle: "I drive, but I also look dope as hell with night vision and my scorpion jacket."
        },
        {
          id: 4,
          title: 'Captain Price',
          subtitle: "Purchased a set of pano GPNVGs. Fast shipping, great quality unit." 
        },
        {
          id: 5,
          title: 'Mike Jones',
          subtitle: "Purchased an Elbit-WP PVS-14. Customer service was outstanding asking my questions about elbit vs thin filmed l3." 
        },
        {
          id: 6,
          title: 'SIX',
          subtitle: "Night Time is half the time, so I purchased a PVS-14. Fast shipping, excellent customer service." 
        },
       ]


  return (
    <div name="customers" className='items-center justify-center flex flex-col'>
        <div>
            <h1 className='text-3xl md:text-4xl font-bold inline border-b-4 border-teal-500'>Customer Reviews</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 text-black p-20">
        {products.map(({ id, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-cyan-800 to-teal-500 rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers;
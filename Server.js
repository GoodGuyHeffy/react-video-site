// sk_test_51NkLvrDDEna1zr84ED5Lakgj8raBTFGniPglv2YrNOfiK1OGAWHKEB8aK05EV9QX7zmftWOhP9o1swDAiuANwodg00yU4uPo5B

// AB RNVG: price_1NkM1mDDEna1zr84XWyA6MlY
// L3 PEQ-15: price_1NkM67DDEna1zr84VG3UBeM4
// PVS-14 L3: price_1NkM6fDDEna1zr84hwHMvCYq
// CLIPNV-LR: price_1NkM74DDEna1zr84t7gBIpXI
// L3Harris AN/PVS-31A: price_1NkM7RDDEna1zr849jXyzop1
// IRAY RICO MICRO: price_1NkM7sDDEna1zr84pP5EJcDW
// B.E. MEYERS MAWL-ER: price_1NkM8RDDEna1zr84j8220E0I
// L3harris GPNVG: price_1NkM8mDDEna1zr84qh9mqMod
// IRAY RICO ALPHA : price_1NkM9LDDEna1zr844hbCahfv
// Team Wendy EXFIL Ballistic: price_1NkMA0DDEna1zr84yh0wR6Fv
// UANVB KATANA L3: price_1NkMARDDEna1zr84TDX4sGa4
// Contractor 640: price_1NkMAoDDEna1zr84B329Yxoc
// AB NIGHT VISION FDE ARNVG: price_1NkMBGDDEna1zr849tYATKI0
// Team Wendy EXFIL LTP Bump: price_1NkMBdDDEna1zr84g9nXPjhr
// B.E. Meyers MAWL-C1+: price_1NkMCTDDEna1zr84mM83R1D9
// WILCOX L4 G24 MOUNT: price_1NkMCpDDEna1zr84xULzGe3a
// AB Night Vision Battery Pack: price_1NkMDBDDEna1zr84NmDJ0CSC
// NOISEFIGHTERS PANOBRIDGE: price_1NkMDUDDEna1zr84YIYPXPwX
// SI/NVG Retention Harness: price_1NkMDpDDEna1zr84vT48LVjr
// L3 Harris NGAL A1: price_1NkMEADDEna1zr84lhbYR9Ra
 

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NkLvrDDEna1zr84ED5Lakgj8raBTFGniPglv2YrNOfiK1OGAWHKEB8aK05EV9QX7zmftWOhP9o1swDAiuANwodg00yU4uPo5B');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
       req.body.items
       [
        {
            id: 1,
            quantity: 3
        }
       ]

       stripe wants
       [
        {
            price: 1,
            quantity: 3
        }
       ]
    */
    console.log(req.body);
       let lineItems = [];
       const items = req.body.items;
       items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
       })
       const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
       });

     res.send(JSON.stringify({
        url: session.url
     }));


});

app.listen(4000, () => console.log("Listening on port 4000") )
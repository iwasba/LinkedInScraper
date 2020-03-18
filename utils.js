const fastcsv = require('fast-csv')
const fs = require('fs')

const ws = fs.createWriteStream('output.csv')

const saveToCsv = () => {
  const data = [
    {
      author: 'Cayla Marie EhrhartChristopher LedwidgeChristopher Ledwidge',
      title: 'On Premise Specialist\n' +
        '      \n' +
        '        EVP Retail at theLender\n' +
        '      \n' +
        '        EVP Retail at theLender',
      comment: '\n' +
        '            Hey Mark! \n' +
        'What should we do if are independent contractors or bartenders? We all work in the event industry and everything has been shut down. Most of us live shift to shift. My entire industry family is struggling and we are terrified of how we will make it to the end of March.  We are helping each other and offering up cash jobs to each other. ANY suggestions on how to the bartenders and service industry can make ends meet and survive until we are able to make drinks and serve food again!💙😰  Thank you!!\n' +
        '…see more\n' +
        '  ',
      time: '15h1h1h'
    },
    {
      author: 'Christopher Ledwidge',
      title: 'EVP Retail at theLender',
      comment: '',
      time: '1h'
    },
    {
      author: 'Christopher Ledwidge',
      title: 'EVP Retail at theLender',
      comment: '',
      time: '1h'
    },
    {
      author: 'Aimee TremaineSara HendersonVijar Kohli',
      title: 'Human Resources Rep - Benefits\n' +
        '      \n' +
        `        Mission driven problem solver. "What if...?" "Could we..." "Let's try..."\n` +
        '      \n' +
        '        Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '\n' +
        '            Is it better to lay off employees or to pay their salary while they are off. What are the issues with lay-off?\n' +
        '\n' +
        '  ',
      time: '14h1h1h'
    },
    {
      author: 'Sara Henderson',
      title: `Mission driven problem solver. "What if...?" "Could we..." "Let's try..."`,
      comment: '',
      time: '1h'
    },
    {
      author: 'Vijar Kohli',
      title: 'Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '',
      time: '1h'
    },
    {
      author: 'Laura DumitriuNicole Ramirez-KaiserVijar Kohli',
      title: 'Partner\n' +
        '      \n' +
        '        Rare and Ultra Rare Disease, Buy and Bill, Specialty Pharmacy, VA/DOD sales, launch and biotech start-up\n' +
        '      \n' +
        '        Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '\n' +
        '            Cold Calling - do you think it is becoming a weaker tool and if so what do you think it will be replaced by in the B to B business space as offices become more virtual? Trying to figure out what the strongest tools for new client acquisition will be and where the cheese is moving next.  (edited)\n' +
        '\n' +
        '\n' +
        '  ',
      time: '14h5h1h'
    },
    {
      author: 'Nicole Ramirez-Kaiser',
      title: 'Rare and Ultra Rare Disease, Buy and Bill, Specialty Pharmacy, VA/DOD sales, launch and biotech start-up',
      comment: '',
      time: '5h'
    },
    {
      author: 'Vijar Kohli',
      title: 'Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '',
      time: '1h'
    },
    {
      author: 'Brenda ReichenbachBrenda ReichenbachBrenda Reichenbach',
      title: "Owner at Tony's Custom Tailor Shop\n" +
        '      \n' +
        "        Owner at Tony's Custom Tailor Shop\n" +
        '      \n' +
        "        Owner at Tony's Custom Tailor Shop",
      comment: '\n' +
        '            Mark thank you so much for thinking of us small business Owners . I own a tuxedo and suit rental shop and I also do alterations. With all of this going on it is really going to hurt my business if all of the local school proms are cancelled because this is what financially gets me through the year. I am hoping and praying that if they don’t have them at all I am going to have to refund all of the money to the ones that already came in to reserve their tux for the prom. I am really stressing. Thank you for listening.\n' +
        '…see more\n' +
        '  ',
      time: '14h1h1h'
    },
    {
      author: 'Brenda Reichenbach',
      title: "Owner at Tony's Custom Tailor Shop",
      comment: '',
      time: '1h'
    },
    {
      author: 'Brenda Reichenbach',
      title: "Owner at Tony's Custom Tailor Shop",
      comment: '',
      time: '1h'
    },
    {
      author: 'Stacey NormanStacey NormanTricia Houseman',
      title: 'Real Estate Agent at Keller Williams Realty, Inc.\n' +
        '      \n' +
        '        Real Estate Agent at Keller Williams Realty, Inc.\n' +
        '      \n' +
        '        Land Home Biz brokered by eXp Realty',
      comment: '\n' +
        '            I’m a real estate agent but also own a landscaping/irrigation company in East Texas area.  How would you handle this?\n' +
        '\n' +
        '  ',
      time: '14h14h11h'
    },
    {
      author: 'Stacey Norman',
      title: 'Real Estate Agent at Keller Williams Realty, Inc.',
      comment: '',
      time: '14h'
    },
    {
      author: 'Tricia Houseman',
      title: 'Land Home Biz brokered by eXp Realty',
      comment: '',
      time: '11h'
    },
    {
      author: 'Connor NewellVijar Kohli',
      title: 'Videographer / Photographer / Designer\n' +
        '      \n' +
        '        Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '\n' +
        '            I own a small media company with a college friend and we specialize in video/photo content for athletes, gyms, and athletic brands. Obviously with gyms and many other businesses closing we are heavily exposed. Any tips on how to pivot are much appreciated!! 🙏🏼\n' +
        '\n' +
        '  ',
      time: '14h1h'
    },
    {
      author: 'Vijar Kohli',
      title: 'Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '',
      time: '1h'
    },
    {
      author: 'Eric GarrisonSuzanne OhmanNick Ruffini',
      title: '✅CEO of WTE Solutions, Fractional CTO of Carolina Partners, Co-Founder MOBLZ.com\n' +
        '      \n' +
        "        Regional Sales Manager at Romano's Macaroni Grill\n" +
        '      \n' +
        "        Founder & Executive Producer at Revoice Media and Drummer's Resource",
      comment: '\n' +
        '            I am working with +500 food trucks across the southeast. They are being crushed. Food Truck Rodeos cancelled, events cancelled...expenses of owning a truck, not cancelled. My company MOBLZ wants to help them.\n' +
        '\n' +
        '  ',
      time: '2d14h7h'
    },
    {
      author: 'Suzanne Ohman',
      title: "Regional Sales Manager at Romano's Macaroni Grill",
      comment: '',
      time: '14h'
    },
    {
      author: 'Nick Ruffini',
      title: "Founder & Executive Producer at Revoice Media and Drummer's Resource",
      comment: '',
      time: '7h'
    },
    {
      author: 'Austin YoungAustin YoungConrad E. Archer',
      title: 'Auto Detailer at Awesome Detailing\n' +
        '      \n' +
        '        Auto Detailer at Awesome Detailing\n' +
        '      \n' +
        '        Remote Operations Directional Driller at Quintana Energy Services',
      comment: '\n' +
        '            I’m working by myself so my business isn’t as vital as some larger ones but my business is in detailing vehicles. I have clients drop their vehicles off to me or I travel to them. Which ever I choose to do involves a lot of travel and the travel advisory restricts any non essential travel. The beginning of car season is coming within the month and clients will need their vehicles in shape for the season. Should I just hold tight until (hopefully) everything passes or should I push harder to get clients since the market will be tighter?\n' +
        '…see more\n' +
        '  ',
      time: '17h13h7h'
    },
    {
      author: 'Austin Young',
      title: 'Auto Detailer at Awesome Detailing',
      comment: '',
      time: '13h'
    },
    {
      author: 'Conrad E. Archer',
      title: 'Remote Operations Directional Driller at Quintana Energy Services',
      comment: '',
      time: '7h'
    },
    {
      author: 'Louise FahysVijar KohliLouise Fahys',
      title: 'CEO & Founder Plan2Play | Increasing employee retention, engagement & satisfaction through real-life interactions\n' +
        '      \n' +
        '        Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor\n' +
        '      \n' +
        '        CEO & Founder Plan2Play | Increasing employee retention, engagement & satisfaction through real-life interactions',
      comment: '\n' +
        '            We just launched a new mobile app which helps people schedule events and engage employees through in real life interaction.  With people trying to avoid social interaction things have come to a hault.  We are trying to add virtual events to our app to help people stay connected during this hard time. Any recommendations?\n' +
        '\n' +
        '  ',
      time: '1d1h41m'
    },
    {
      author: 'Vijar Kohli',
      title: 'Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '',
      time: '1h'
    },
    {
      author: 'Louise Fahys',
      title: 'CEO & Founder Plan2Play | Increasing employee retention, engagement & satisfaction through real-life interactions',
      comment: '',
      time: '41m'
    },
    {
      author: 'Gary BelastockVijar KohliGary Belastock',
      title: 'Connecting companies with great talent in retail, consumer goods/services, restaurants, hospitality, etc!\n' +
        '      \n' +
        '        Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor\n' +
        '      \n' +
        '        Connecting companies with great talent in retail, consumer goods/services, restaurants, hospitality, etc!',
      comment: '\n' +
        "            Mark...very generous gesture on your part. Thank you. I own and manage a small recruiting firm specializing in retail and restaurants. Mostly managerial positions. With business on hold and I'm sure many layoff's immanent...do you see another related area other than retail/restaurants that will be growing? Or other value added services I could provide? contract placement, outplacement, etc? Struggling to see where I can go with this business?\n" +
        '\n' +
        '…see more\n' +
        '  ',
      time: '1d1d1h'
    },
    {
      author: 'Vijar Kohli',
      title: 'Provide Restructuring & Turnaround Services for Midsize Businesses | Group CEO at Golden Door | Technology Investor',
      comment: '',
      time: '1d'
    },
    {
      author: 'Gary Belastock',
      title: 'Connecting companies with great talent in retail, consumer goods/services, restaurants, hospitality, etc!',
      comment: '',
      time: '1h'
    }
  ]
  fastcsv.write(data, { headers: true }).pipe(ws)
}

saveToCsv()
module.exports = { saveToCsv }

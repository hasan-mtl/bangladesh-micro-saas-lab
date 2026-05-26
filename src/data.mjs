export const site = {
  title: "Bangladesh Micro-SaaS Lab",
  tagline: "Practical SaaS ideas for Bangladesh businesses, with pricing and revenue calculators.",
  updated: "May 26, 2026",
  repoName: "bangladesh-micro-saas-lab"
};

export const marketSignals = [
  {
    value: "11.87M",
    label: "economic units",
    detail: "Economic Census 2024 reported around 11.87 million economic units. This is the broad pool of shops, services, transport, food, and small operators."
  },
  {
    value: "7.8M+",
    label: "CMSMEs",
    detail: "Bangladesh has more than 7.8 million cottage, micro, small, and medium enterprises. This is where low-cost software has the most room."
  },
  {
    value: "40%+",
    label: "retail and repair",
    detail: "Wholesale, retail trade, and vehicle repair make up the largest share of economic units. Shop software has the widest base."
  },
  {
    value: "436K",
    label: "food service units",
    detail: "A BBS hotel-restaurant survey counted 436,274 food-service establishments in 2021, before the latest growth wave."
  },
  {
    value: "9.5K+",
    label: "mapped salons",
    detail: "Public map datasets show about 9,570 mapped hair salons. Roadside and informal salons are likely undercounted."
  },
  {
    value: "99K",
    label: "private education units",
    detail: "Private education surveys point to nearly 100,000 private education institutions, including coaching centers."
  },
  {
    value: "227K",
    label: "licensed pharmacies",
    detail: "DGDA-linked reporting places licensed pharmacies above 220,000. Pharmacy stock and expiry control is a large vertical."
  },
  {
    value: "186M",
    label: "mobile connections",
    detail: "BTRC March 2026 reporting puts mobile subscriptions above 186 million. Mobile-first distribution is not optional."
  }
];

export const removedIdeas = [
  "Generic ecommerce builder",
  "WordPress marketplace setup",
  "Broad ERP for everyone",
  "Landing-page-only SaaS",
  "Anything that does not solve a daily cash, queue, stock, fee, booking, or due problem"
];

export const ideas = [
  {
    id: "salon",
    rank: 1,
    slug: "salon-serial-booking",
    title: "Salon Serial and Booking System",
    shortTitle: "Salon Serial",
    category: "Service",
    score: 9.4,
    setupFee: 7000,
    monthlyFee: 350,
    supportCost: 70,
    defaultCustomers: 1000,
    serviceableTarget: "Start with 1,000 salons in Dhaka, Chattogram, Sylhet, district towns, and busy bazar clusters. This is roughly 10 percent of the mapped-salon signal, before counting informal shops.",
    thesis: "People hate arriving at a salon and not knowing how many serials are ahead. Owners lose customers when waiting feels uncertain. A QR/public serial page solves a real-life irritation.",
    corePain: "Customer asks: how long is the queue? Owner answers manually all day. Staff forgets order. Regular customers call repeatedly. Walk-ins leave when the wait is unclear.",
    mvp: [
      "Public salon page with live serial count",
      "QR code poster for the door and mirror",
      "Owner/staff app to add, call, skip, complete, or cancel serials",
      "Optional booking slots for premium salons",
      "Staff-wise service list and commission tracking",
      "Daily cash close and service count",
      "WhatsApp/SMS-ready customer message text"
    ],
    pricingLogic: "BDT 350/month is practical because the product is customer-facing and saves owner time every day. Keep BDT 250 as the lowest annual-prepaid tier; do not go below that if support is included.",
    saleLine: "Your customers can scan QR and see current serial before coming. You stop answering the same question all day.",
    notBuild: [
      "Do not build a beauty ecommerce marketplace.",
      "Do not build heavy CRM first.",
      "Do not force online payment in MVP."
    ],
    validation: [
      "Public maps show at least 9,570 salons, likely undercounting informal shops.",
      "Every neighborhood has repeat haircut demand.",
      "Queue pain is visible to both customers and owners.",
      "The app can spread through QR posters and customer sharing."
    ],
    launchPlan: [
      "Print 50 QR demo posters and visit salon clusters.",
      "Offer first 20 salons BDT 5,000 setup if they pay 6 months upfront.",
      "Record queue before/after: calls reduced, walk-outs reduced, daily customers counted.",
      "Add staff commission only after the queue flow is stable."
    ],
    risks: [
      "Owners may say they can manage with a notebook.",
      "Staff may forget to update serials during rush.",
      "Customers without data may still call."
    ],
    mitigations: [
      "Make staff actions one tap.",
      "Show big wall-display mode on any old phone.",
      "Let staff share current serial by WhatsApp with one tap."
    ]
  },
  {
    id: "shop",
    rank: 2,
    slug: "shop-ledger-inventory",
    title: "Shop Ledger, Inventory, and Daily Profit",
    shortTitle: "Shop Ledger",
    category: "Retail",
    score: 9.2,
    setupFee: 5000,
    monthlyFee: 200,
    supportCost: 60,
    defaultCustomers: 1000,
    serviceableTarget: "Retail and repair are the largest slice of Bangladesh economic units. Even 1,000 customers is a tiny fraction of the serviceable market.",
    thesis: "The shop owner wants to know what was bought, what was sold, who owes money, what stock is low, and what profit came today.",
    corePain: "Notebook records get lost, buying price is forgotten, customer dues are unclear, and the owner does not know if the day was profitable.",
    mvp: [
      "Product list with buying price, selling price, quantity, unit, low stock",
      "Purchase entry",
      "Sale entry",
      "Customer due and supplier due",
      "Daily close",
      "Monthly report",
      "Local backup and cloud backup upgrade"
    ],
    pricingLogic: "BDT 200/month can work only if the local starter tier is simple. Cloud backup and restore should be BDT 300-500/month.",
    saleLine: "At night you know the truth: total sale, due, stock, and profit.",
    notBuild: [
      "Do not call it accounting software.",
      "Do not add complex ERP modules first.",
      "Do not promise unlimited support at BDT 100/month."
    ],
    validation: [
      "Bangladesh has more than 7.8 million CMSMEs.",
      "Retail and repair are above 40 percent of economic units.",
      "Digital ledger products already validate the habit.",
      "Phone-loss fear makes cloud backup easy to sell."
    ],
    launchPlan: [
      "Choose one bazar and onboard 10 shops manually.",
      "Import opening stock for them.",
      "Make daily close the first habit.",
      "Charge cloud only after owner understands data-loss risk."
    ],
    risks: [
      "Low monthly price can be eaten by support calls.",
      "Shop staff may enter wrong buying price.",
      "Churn after setup is possible."
    ],
    mitigations: [
      "Offer annual prepaid.",
      "Use product templates and CSV import.",
      "Add backup reminders and restore proof."
    ]
  },
  {
    id: "restaurant",
    rank: 3,
    slug: "restaurant-table-order",
    title: "Restaurant Table QR Order and Kitchen Display",
    shortTitle: "Restaurant Table",
    category: "Food",
    score: 8.8,
    setupFee: 12000,
    monthlyFee: 700,
    supportCost: 180,
    defaultCustomers: 1000,
    serviceableTarget: "Food-service establishments crossed 436,000 in the 2021 BBS survey. A 1,000-restaurant target is less than 0.25 percent of that base.",
    thesis: "A restaurant loses time when staff repeat the menu, table status is unclear, and kitchen orders are shouted or written badly.",
    corePain: "Customers do not know available items. Staff forget table order details. Owners cannot see which table is active. Kitchen receives messy notes.",
    mvp: [
      "QR menu per table",
      "Live table status",
      "30-60 second table hold",
      "Waiter mode",
      "Kitchen order display",
      "Item available/unavailable toggle",
      "Bill print/share and daily cash close"
    ],
    pricingLogic: "BDT 700/month is reasonable because restaurants can pay more when the system touches table turnover, menu control, and kitchen speed.",
    saleLine: "Customers scan, see available items, order faster, and the kitchen gets a clean queue.",
    notBuild: [
      "Do not build food delivery marketplace.",
      "Do not build complex inventory first.",
      "Do not require customers to install an app."
    ],
    validation: [
      "Food-service count is large and growing.",
      "QR menu behavior is familiar after mobile payments and delivery apps.",
      "Rush-hour workflow has obvious pain.",
      "Hardware and printer support can become a pro tier."
    ],
    launchPlan: [
      "Pilot with 5 small restaurants that already have table service.",
      "Use laminated table QR cards.",
      "Test rush-hour kitchen display.",
      "Charge setup after one week if staff keeps using it."
    ],
    risks: [
      "If the UI is slow, staff will abandon it.",
      "Printer and network issues create support load.",
      "Restaurants may ask for custom menu design."
    ],
    mitigations: [
      "Keep waiter mode as fast as paper.",
      "Sell hardware setup separately.",
      "Use fixed menu templates."
    ]
  },
  {
    id: "pharmacy",
    rank: 4,
    slug: "pharmacy-stock-expiry",
    title: "Pharmacy Stock and Expiry Control",
    shortTitle: "Pharmacy Stock",
    category: "Retail",
    score: 8.5,
    setupFee: 10000,
    monthlyFee: 500,
    supportCost: 120,
    defaultCustomers: 1000,
    serviceableTarget: "Licensed pharmacy reporting is above 220,000. A 1,000-customer target is below 0.5 percent of that licensed base.",
    thesis: "Pharmacies lose money through expired products, batch confusion, supplier dues, and fast-moving stockouts.",
    corePain: "Owner forgets expiry dates, staff sells without checking batch, supplier due is scattered, and near-expiry stock becomes dead loss.",
    mvp: [
      "Medicine item list",
      "Batch and expiry date",
      "Purchase and supplier due",
      "Sale and sales return",
      "Near-expiry report",
      "Low-stock report",
      "Daily close"
    ],
    pricingLogic: "BDT 500/month is safer than BDT 200 because pharmacy catalog complexity creates more support. Charge for barcode/printer as pro setup.",
    saleLine: "One expired box can cost more than the monthly fee. The system warns before loss happens.",
    notBuild: [
      "Do not provide medical advice.",
      "Do not build prescription telemedicine.",
      "Do not promise regulatory compliance without expert review."
    ],
    validation: [
      "Pharmacy count is large.",
      "Expiry loss is concrete and easy to understand.",
      "Batch and supplier dues are daily workflow problems.",
      "Owners can pay more than ordinary grocery shops."
    ],
    launchPlan: [
      "Start with 20 pharmacies in one town.",
      "Enter top 300 products first, not full catalog.",
      "Prove near-expiry report value.",
      "Add barcode after the core stock workflow works."
    ],
    risks: [
      "Product catalog can become heavy.",
      "Wrong expiry entry reduces trust.",
      "Some pharmacy owners avoid formal records."
    ],
    mitigations: [
      "Start with high-moving items.",
      "Use quick duplicate product entry.",
      "Keep reports owner-private."
    ]
  },
  {
    id: "madrasa",
    rank: 5,
    slug: "madrasa-management-system",
    title: "Madrasa Management System",
    shortTitle: "Madrasa System",
    category: "Education",
    score: 8.2,
    setupFee: 12000,
    monthlyFee: 500,
    supportCost: 120,
    defaultCustomers: 1000,
    serviceableTarget: "Alia and Qawmi madrasa counts together create a large education vertical. Start with small private madrasas that collect monthly fees manually.",
    thesis: "Madrasas need fee collection, attendance, dormitory/meal notes, class progress, and parent communication without a heavy school ERP.",
    corePain: "Monthly fees are tracked in notebooks, parent messages are manual, attendance is scattered, and management cannot see due students quickly.",
    mvp: [
      "Student profile",
      "Monthly fee and due",
      "Attendance",
      "Class or hifz progress notes",
      "Parent SMS/WhatsApp text",
      "Teacher list",
      "Monthly collection report"
    ],
    pricingLogic: "BDT 500/month is practical if SMS is charged separately. Setup needs to cover data entry and training.",
    saleLine: "You know which students paid, who is absent, and which parents need a reminder.",
    notBuild: [
      "Do not build a full LMS first.",
      "Do not add complex exam automation in MVP.",
      "Do not force English-first labels."
    ],
    validation: [
      "Education institution count is high.",
      "Madrasas often have recurring monthly fee collection.",
      "Parent communication is repetitive.",
      "A simple system can beat a complex ERP."
    ],
    launchPlan: [
      "Pilot with 3 madrasas with 100-500 students.",
      "Import students and fee months.",
      "Use parent due reminder as the first paid value.",
      "Add attendance once fee workflow is stable."
    ],
    risks: [
      "Data entry is time-consuming.",
      "Administrators may ask for custom reports.",
      "SMS cost can hurt margin."
    ],
    mitigations: [
      "Charge setup based on student count.",
      "Offer only fixed reports at starter tier.",
      "Make SMS prepaid add-on."
    ]
  },
  {
    id: "school",
    rank: 6,
    slug: "school-coaching-fee-attendance",
    title: "School and Coaching Fee Collection",
    shortTitle: "School Fees",
    category: "Education",
    score: 8.0,
    setupFee: 8000,
    monthlyFee: 500,
    supportCost: 110,
    defaultCustomers: 1000,
    serviceableTarget: "Private education surveys report nearly 100,000 private education institutions and about 6,600 registered coaching centers. Unregistered coaching centers make the practical base larger.",
    thesis: "Coaching centers and small schools live on monthly fees. Due tracking and parent reminders create immediate cash-flow value.",
    corePain: "Fees are late, receipts are manual, attendance is separate, and parents need reminders every month.",
    mvp: [
      "Student list",
      "Monthly fee",
      "Due and paid status",
      "Attendance",
      "Receipt",
      "Parent reminder text",
      "Class-wise collection report"
    ],
    pricingLogic: "BDT 500/month is fair for institutions collecting recurring fees. Charge more by student count if usage grows.",
    saleLine: "You stop chasing fees from notebooks. The due list is ready every day.",
    notBuild: [
      "Do not build full school ERP first.",
      "Do not add live class/video.",
      "Do not include unlimited SMS in subscription."
    ],
    validation: [
      "Registered coaching centers number in the thousands.",
      "Private education institutions are near 100,000.",
      "Fee collection is monthly and painful.",
      "Parents accept phone reminders."
    ],
    launchPlan: [
      "Start with coaching centers, not large schools.",
      "Import students from Excel.",
      "Make receipt and due list excellent.",
      "Add attendance after fee workflow is working."
    ],
    risks: [
      "School ERP expectations can explode scope.",
      "Institutions may require many report formats.",
      "Payment collection integrations add complexity."
    ],
    mitigations: [
      "Position as fee collection, not full ERP.",
      "Use fixed report templates.",
      "Add payment later."
    ]
  },
  {
    id: "hotel",
    rank: 7,
    slug: "micro-hotel-room-booking",
    title: "Micro Hotel and Guesthouse Booking",
    shortTitle: "Hotel Rooms",
    category: "Hospitality",
    score: 7.7,
    setupFee: 15000,
    monthlyFee: 700,
    supportCost: 180,
    defaultCustomers: 1000,
    serviceableTarget: "Target small hotels, lodges, and guesthouses near hospitals, transport hubs, markets, and district towns. This is narrower than food service but higher value per customer.",
    thesis: "Small hotels lose control across shifts: room status, due, check-in, cleaning, and daily cash are often split across notebooks.",
    corePain: "Owner does not know which rooms are free, occupied, due, dirty, or booked. Shift staff can hide leakage.",
    mvp: [
      "Room grid",
      "Check-in/check-out",
      "Booking hold",
      "Guest note",
      "Due and payment",
      "Housekeeping status",
      "Daily cash and occupancy report"
    ],
    pricingLogic: "BDT 700/month is reasonable because the owner is buying control over room leakage and shift accountability.",
    saleLine: "Every room has a status. Owner can see cash and occupancy without calling the counter.",
    notBuild: [
      "Do not become Booking.com.",
      "Do not add OTA integration first.",
      "Do not make legal compliance promises."
    ],
    validation: [
      "Accommodation and food services are visible in every district town.",
      "Room leakage is a direct owner pain.",
      "The workflow supports higher setup fee.",
      "Old phone or tablet can run the room board."
    ],
    launchPlan: [
      "Sell to 5 guesthouses near a hospital or station.",
      "Set up room map manually.",
      "Train night and day staff separately.",
      "Add owner dashboard after staff uses daily."
    ],
    risks: [
      "Staff may resist transparency.",
      "Guest identity rules vary.",
      "Custom room pricing can become messy."
    ],
    mitigations: [
      "Make owner-only audit log.",
      "Offer simple printable daily register.",
      "Keep rate rules simple in starter tier."
    ]
  },
  {
    id: "tailor",
    rank: 8,
    slug: "tailor-boutique-order-manager",
    title: "Tailor and Boutique Order Manager",
    shortTitle: "Tailor Orders",
    category: "Service",
    score: 7.5,
    setupFee: 5000,
    monthlyFee: 250,
    supportCost: 70,
    defaultCustomers: 1000,
    serviceableTarget: "Target tailoring clusters, ladies boutiques, alteration shops, and Eid-season high-volume businesses. The market is local and fragmented.",
    thesis: "Measurements, delivery dates, advance payments, and order status are easy to lose in paper notebooks.",
    corePain: "Customers ask if the dress is ready. Measurements are misplaced. Delivery promises are forgotten. Advance and due are unclear.",
    mvp: [
      "Customer measurement profile",
      "Order photo",
      "Delivery date",
      "Advance and due",
      "Work status",
      "Staff assignment",
      "Pickup reminder"
    ],
    pricingLogic: "BDT 250/month is acceptable because support burden is lower than restaurant or pharmacy. Cloud backup can be BDT 350/month.",
    saleLine: "Customer measurements are never lost, and delivery promises are visible every morning.",
    notBuild: [
      "Do not build fashion ecommerce.",
      "Do not add inventory first.",
      "Do not overcomplicate measurement templates."
    ],
    validation: [
      "Tailoring is everywhere and seasonal pressure is high.",
      "Photo-first order entry reduces typing.",
      "Measurements are valuable data.",
      "The app can work on one phone."
    ],
    launchPlan: [
      "Pilot before Eid season.",
      "Make measurement setup very fast.",
      "Print job slips for early users.",
      "Use delivery reminder as the retention hook."
    ],
    risks: [
      "Some tailors dislike typing.",
      "Seasonal churn after Eid.",
      "Different shops use different measurement styles."
    ],
    mitigations: [
      "Use photo-first entry.",
      "Offer annual low-price plan.",
      "Allow custom measurement labels."
    ]
  },
  {
    id: "repair",
    rank: 9,
    slug: "repair-shop-job-card",
    title: "Repair Shop Job Card and Warranty",
    shortTitle: "Repair Job Card",
    category: "Service",
    score: 7.3,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 80,
    defaultCustomers: 1000,
    serviceableTarget: "Target mobile repair, electronics repair, computer service, motorcycle workshops, and AC repair desks in dense market areas.",
    thesis: "Repair shops need job cards, device photos, part usage, warranty dates, pickup reminders, and technician commissions.",
    corePain: "Customer device details are forgotten, warranty arguments happen, parts usage is unclear, and technicians are paid without accurate job history.",
    mvp: [
      "Job card",
      "Device photo",
      "Problem note",
      "Parts used",
      "Warranty date",
      "Pickup reminder",
      "Technician commission"
    ],
    pricingLogic: "BDT 300/month is realistic if cloud photo backup is included in a higher tier.",
    saleLine: "Every repair has proof: photo, issue, parts, warranty, due, and technician.",
    notBuild: [
      "Do not build marketplace for repair leads.",
      "Do not add inventory complexity first.",
      "Do not require long forms."
    ],
    validation: [
      "Repair shops cluster in every town.",
      "Warranty disputes create real pain.",
      "Photo evidence is easy to understand.",
      "Technician commission is a strong owner hook."
    ],
    launchPlan: [
      "Start with mobile repair markets.",
      "Use one-minute job card entry.",
      "Add printed receipt later.",
      "Offer cloud photo backup as pro."
    ],
    risks: [
      "Technicians avoid data entry.",
      "Photos use storage.",
      "Owners may demand parts inventory."
    ],
    mitigations: [
      "Make camera the first input.",
      "Compress photos.",
      "Keep parts list simple in MVP."
    ]
  },
  {
    id: "distributor",
    rank: 10,
    slug: "distributor-due-collection",
    title: "Distributor Due Collection and Sales Rep App",
    shortTitle: "Distributor Dues",
    category: "Wholesale",
    score: 7.1,
    setupFee: 20000,
    monthlyFee: 1000,
    supportCost: 220,
    defaultCustomers: 1000,
    serviceableTarget: "Target wholesalers, FMCG distributors, bakery suppliers, water delivery, and local route-based sellers. Fewer buyers, but higher payment capacity.",
    thesis: "Wholesalers care about route orders, shop dues, collection receipts, and sales rep accountability.",
    corePain: "Sales reps collect cash and orders in notebooks. Owner does not know route performance or overdue shops until too late.",
    mvp: [
      "Customer/shop list",
      "Route plan",
      "Order entry",
      "Due ledger",
      "Collection receipt",
      "Sales rep daily report",
      "Owner dashboard"
    ],
    pricingLogic: "BDT 1,000/month is realistic because the buyer is larger than a micro shop and due recovery can be worth much more.",
    saleLine: "You know which shop owes money, which rep collected, and which route sold today.",
    notBuild: [
      "Do not build full distribution ERP.",
      "Do not add warehouse automation first.",
      "Do not customize every route rule for starter plan."
    ],
    validation: [
      "Wholesalers have higher willingness to pay.",
      "Receivables are direct cash-flow pain.",
      "Sales rep accountability is owner-visible.",
      "Per-user pricing can grow revenue."
    ],
    launchPlan: [
      "Pick one vertical such as bakery suppliers.",
      "Pilot with one owner and 2-5 reps.",
      "Make collection receipt excellent.",
      "Add route analytics after two weeks of use."
    ],
    risks: [
      "Longer sales cycle.",
      "More customization pressure.",
      "Rep adoption may be difficult."
    ],
    mitigations: [
      "Charge implementation properly.",
      "Start with one vertical.",
      "Keep rep app very simple."
    ]
  }
];

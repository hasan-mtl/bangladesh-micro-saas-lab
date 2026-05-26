export const site = {
  title: "Bangladesh Halal Micro-SaaS Lab",
  tagline: "30 practical halal software and training ideas for Bangladesh businesses.",
  updated: "May 26, 2026",
  repoName: "bangladesh-micro-saas-lab"
};

export const marketSignals = [
  {
    value: "11.87M",
    label: "economic units",
    detail: "Bangladesh Economic Census 2024 reporting puts the country near 11.87 million economic units. The opportunity is huge, but most users need simple tools."
  },
  {
    value: "41%+",
    label: "retail and repair share",
    detail: "Wholesale, retail, and motor-vehicle repair are the largest block of economic units. Stock, dues, POS, and repair workflows are practical."
  },
  {
    value: "436K",
    label: "food-service outlets",
    detail: "BBS hotel-restaurant survey reporting counted 436,274 hotels, restaurants, and tea stalls. Table, kitchen, and cash tools have a real base."
  },
  {
    value: "9.5K+",
    label: "mapped salons",
    detail: "Public map datasets list about 9,570 hair salons. Informal roadside salons are likely undercounted, so the practical base is bigger."
  },
  {
    value: "98.9K",
    label: "private education units",
    detail: "BBS private education reporting shows 98,980 private educational institutions. Fee collection, attendance, and parent reminders are recurring pain."
  },
  {
    value: "6,587",
    label: "registered coaching centers",
    detail: "Registered coaching centers alone are in the thousands, with many more informal centers. Monthly fees make this a recurring SaaS fit."
  },
  {
    value: "15K+",
    label: "licensed private health facilities",
    detail: "DGHS reporting in 2024 referenced 15,233 licensed private hospitals, clinics, diagnostic centers, and blood banks. Serial and reporting tools fit."
  },
  {
    value: "16.5M",
    label: "farmers",
    detail: "Agriculture advisory work cites 16.5 million farmers in Bangladesh, with 85 percent smallholders. Voice-first rural tools can matter."
  },
  {
    value: "2.45M+",
    label: "fish farmers",
    detail: "Fisheries statistics point to millions of fish farmers and fishers. Feed, pond, harvest, and buyer records are practical software problems."
  },
  {
    value: "186M",
    label: "mobile connections",
    detail: "BTRC March 2026 reporting puts mobile subscriptions above 186 million. Any Bangladesh product must be mobile-first."
  }
];

export const removedIdeas = [
  "Generic online-store setup",
  "Template website resale",
  "Dropshipping courses",
  "Crypto, betting, gambling, lottery, or interest-based finance tools",
  "Broad ERP for everyone",
  "Fake AI certificate course with no practical workplace result",
  "Any product that does not solve a daily queue, dues, booking, stock, fee, training, report, or owner-control problem"
];

export const ideas = [
  {
    id: "ai-training",
    rank: 1,
    slug: "corporate-ai-training-workflow",
    title: "Corporate AI Training and Workflow Automation",
    shortTitle: "AI Training",
    category: "Training",
    score: 9.6,
    setupFee: 30000,
    monthlyFee: 3000,
    supportCost: 450,
    defaultCustomers: 100,
    serviceableTarget: "Start with SMEs, agencies, schools, clinics, accountants, exporters, and offices that already use Excel and email but do not know how to use AI safely at work.",
    thesis: "Bangladesh offices are hearing about AI, but most employees still need practical training: write better emails, summarize documents, prepare reports, automate Excel work, and create customer replies.",
    corePain: "Owners know AI is important, but staff waste time, use random tools, leak data, or cannot connect AI to daily office work.",
    mvp: [
      "2-day practical AI workshop for office staff",
      "Bangla/English prompt templates",
      "Excel, email, report, HR, sales, and customer-service workflows",
      "Company AI policy starter kit",
      "Monthly office-hours support",
      "Private prompt library",
      "Before/after productivity checklist"
    ],
    pricingLogic: "This is not a BDT 300/month product. Charge BDT 30,000-100,000 per company setup/training, then BDT 3,000-10,000/month for templates, support, and workflow updates.",
    saleLine: "Train your staff to use AI for real office work, without leaking data or wasting time.",
    notBuild: [
      "Do not sell a generic prompt-engineering certificate.",
      "Do not teach only ChatGPT tricks.",
      "Do not promise job guarantee or magic automation."
    ],
    validation: [
      "Bangladesh training discussions now include AI and future-work skills.",
      "Many offices still operate around Excel, email, Word, and manual reporting.",
      "Corporate clients can pay more than micro shops.",
      "Training opens the door to recurring software and automation retainers."
    ],
    launchPlan: [
      "Create one AI-for-office demo day.",
      "Sell to 10 SMEs at a founder price.",
      "Collect each company's repeated document/report workflow.",
      "Turn repeated workflows into templates and small software tools."
    ],
    risks: [
      "Companies may treat it as a one-time training.",
      "Staff may forget after workshop.",
      "Data privacy mistakes can hurt trust."
    ],
    mitigations: [
      "Bundle monthly office hours.",
      "Provide reusable templates.",
      "Teach strict data-safety rules."
    ]
  },
  {
    id: "salon",
    rank: 2,
    slug: "salon-serial-booking",
    title: "Salon Serial and Booking System",
    shortTitle: "Salon Serial",
    category: "Service",
    score: 9.5,
    setupFee: 7000,
    monthlyFee: 350,
    supportCost: 70,
    defaultCustomers: 1000,
    serviceableTarget: "Start with 1,000 salons in Dhaka, Chattogram, Sylhet, district towns, and bazar clusters. Public map data already shows about 9,570 salons before informal shops.",
    thesis: "People hate arriving at a salon and not knowing how many serials are ahead. A QR/public serial page solves a real-life irritation.",
    corePain: "Customers call to ask serial count. Staff answer the same question all day. Walk-ins leave when waiting feels uncertain.",
    mvp: [
      "Public salon serial page",
      "Door QR code",
      "Add, call, skip, complete serial",
      "Optional booking slots",
      "Staff-wise service list",
      "Daily cash close",
      "WhatsApp-ready serial message"
    ],
    pricingLogic: "BDT 350/month is practical because the product is customer-facing and saves daily owner time. Keep BDT 250 only for annual prepaid.",
    saleLine: "Customers scan QR and see the current serial before coming.",
    notBuild: [
      "Do not build a beauty product shop.",
      "Do not force online payment first.",
      "Do not build a salon social network."
    ],
    validation: [
      "Salon count signal is visible in public maps.",
      "Every neighborhood has repeat haircut demand.",
      "Queue pain is visible to both customer and owner.",
      "QR poster can market the product inside the shop."
    ],
    launchPlan: [
      "Print 50 demo QR posters.",
      "Visit salon clusters.",
      "Offer first 20 installs at BDT 5,000 with 6 months prepaid.",
      "Measure reduced phone calls and fewer walk-outs."
    ],
    risks: [
      "Staff may forget to update serial.",
      "Owners may say notebook is enough.",
      "Customers without data may still call."
    ],
    mitigations: [
      "One-tap staff actions.",
      "Old-phone wall display mode.",
      "One-tap WhatsApp serial share."
    ]
  },
  {
    id: "shop",
    rank: 3,
    slug: "shop-ledger-inventory",
    title: "Shop Ledger, Inventory, and Daily Profit",
    shortTitle: "Shop Ledger",
    category: "Retail",
    score: 9.2,
    setupFee: 5000,
    monthlyFee: 200,
    supportCost: 60,
    defaultCustomers: 1000,
    serviceableTarget: "Retail and repair are the largest block of Bangladesh economic units. Even 1,000 paying shops is a tiny penetration target.",
    thesis: "The shop owner needs to know today what was bought, sold, due, low-stock, and profitable.",
    corePain: "Notebook records get lost, buying price is forgotten, and customer/supplier dues become unclear.",
    mvp: [
      "Product list",
      "Purchase entry",
      "Sale entry",
      "Customer dues",
      "Supplier dues",
      "Daily close",
      "Local backup and cloud upgrade"
    ],
    pricingLogic: "BDT 200/month can work only for local-only simple software. Cloud backup should be BDT 300-500/month.",
    saleLine: "At night, the owner sees sale, due, stock, and profit.",
    notBuild: [
      "Do not call it accounting software.",
      "Do not build broad ERP first.",
      "Do not give unlimited support at BDT 100/month."
    ],
    validation: [
      "Bangladesh has millions of small economic units.",
      "Retail/repair is the largest segment.",
      "Phone-loss fear makes cloud backup easy to explain.",
      "Daily close can become a habit."
    ],
    launchPlan: [
      "Pick one bazar.",
      "Install in 10 shops.",
      "Import opening stock.",
      "Make daily close the main habit."
    ],
    risks: [
      "Support can eat margin.",
      "Wrong data entry reduces trust.",
      "Churn after setup."
    ],
    mitigations: [
      "Annual prepaid.",
      "CSV import and product templates.",
      "Backup reminders."
    ]
  },
  {
    id: "restaurant",
    rank: 4,
    slug: "restaurant-table-order",
    title: "Restaurant Table QR Order and Kitchen Display",
    shortTitle: "Restaurant Table",
    category: "Food",
    score: 8.9,
    setupFee: 12000,
    monthlyFee: 700,
    supportCost: 180,
    defaultCustomers: 1000,
    serviceableTarget: "Food-service establishments crossed 436,000 in the BBS 2021 survey. Target seated restaurants, fast food, tea shops with tables, and local cafes.",
    thesis: "Customers scan, see available items, order faster, and the kitchen receives clean orders.",
    corePain: "Menu questions, table confusion, shouted kitchen orders, unavailable items, and messy bills slow service.",
    mvp: [
      "QR menu per table",
      "Live table status",
      "30-60 second table hold",
      "Waiter mode",
      "Kitchen display",
      "Item availability toggle",
      "Bill print/share"
    ],
    pricingLogic: "BDT 700/month is reasonable because restaurants can pay more when table turnover and kitchen speed improve.",
    saleLine: "The table, menu, kitchen, and bill stay in one flow.",
    notBuild: [
      "Do not build food delivery marketplace.",
      "Do not force customer app install.",
      "Do not build inventory first."
    ],
    validation: [
      "Food-service base is large.",
      "QR behavior is familiar.",
      "Rush-hour pain is visible.",
      "Hardware support can become pro tier."
    ],
    launchPlan: [
      "Pilot with 5 restaurants.",
      "Use laminated table QR cards.",
      "Test rush-hour kitchen flow.",
      "Charge after staff keep using it."
    ],
    risks: [
      "Slow UI kills adoption.",
      "Printer/network support burden.",
      "Custom menu design requests."
    ],
    mitigations: [
      "Make waiter mode fast.",
      "Sell hardware separately.",
      "Use fixed menu templates."
    ]
  },
  {
    id: "madrasa",
    rank: 5,
    slug: "madrasa-management-system",
    title: "Madrasa Management System",
    shortTitle: "Madrasa System",
    category: "Education",
    score: 8.6,
    setupFee: 12000,
    monthlyFee: 500,
    supportCost: 120,
    defaultCustomers: 1000,
    serviceableTarget: "Alia and Qawmi madrasas together create a large education vertical. Start with small private madrasas collecting monthly fees manually.",
    thesis: "Madrasas need fee collection, attendance, parent reminders, and class progress without heavy school ERP.",
    corePain: "Monthly fees sit in notebooks, parent communication is manual, and due students are hard to see quickly.",
    mvp: [
      "Student profile",
      "Monthly fee",
      "Attendance",
      "Hifz/class progress notes",
      "Parent reminder text",
      "Teacher list",
      "Collection report"
    ],
    pricingLogic: "BDT 500/month is practical if SMS is prepaid separately. Setup should depend on student count.",
    saleLine: "Know who paid, who is absent, and which parent needs a reminder.",
    notBuild: [
      "Do not build full LMS first.",
      "Do not add complex exam automation first.",
      "Do not make English-only UI."
    ],
    validation: [
      "Madrasa counts are large across formal and informal systems.",
      "Fees repeat monthly.",
      "Parent communication is repetitive.",
      "Simple system can beat complex ERP."
    ],
    launchPlan: [
      "Pilot with 3 madrasas.",
      "Import students.",
      "Focus on fee due reminder.",
      "Add attendance after fee habit."
    ],
    risks: [
      "Data entry burden.",
      "Custom report requests.",
      "SMS cost."
    ],
    mitigations: [
      "Charge setup by student count.",
      "Fixed reports only.",
      "SMS prepaid add-on."
    ]
  },
  {
    id: "school",
    rank: 6,
    slug: "school-coaching-fee-attendance",
    title: "School and Coaching Fee Collection",
    shortTitle: "School Fees",
    category: "Education",
    score: 8.4,
    setupFee: 8000,
    monthlyFee: 500,
    supportCost: 110,
    defaultCustomers: 1000,
    serviceableTarget: "Private education reporting shows 98,980 institutions and 6,587 registered coaching centers. Informal coaching makes the true base larger.",
    thesis: "Coaching centers live on monthly fees. Due tracking and parent reminders create immediate cash-flow value.",
    corePain: "Fees are late, receipts are manual, attendance is separate, and parents need reminders every month.",
    mvp: [
      "Student list",
      "Monthly fee",
      "Due and paid status",
      "Attendance",
      "Receipt",
      "Parent reminder text",
      "Class-wise report"
    ],
    pricingLogic: "BDT 500/month is fair for recurring-fee institutions. Increase by student count later.",
    saleLine: "Stop chasing fees from notebooks.",
    notBuild: [
      "Do not build full school ERP first.",
      "Do not add live classes.",
      "Do not include unlimited SMS."
    ],
    validation: [
      "Private education base is near 100,000.",
      "Registered coaching centers are in the thousands.",
      "Fees repeat monthly.",
      "Parents accept phone reminders."
    ],
    launchPlan: [
      "Start with coaching centers.",
      "Import students from Excel.",
      "Make due list excellent.",
      "Add attendance later."
    ],
    risks: [
      "ERP expectation explosion.",
      "Many report formats.",
      "Payment integration complexity."
    ],
    mitigations: [
      "Position as fee collection.",
      "Fixed templates.",
      "Payment later."
    ]
  },
  {
    id: "pharmacy",
    rank: 7,
    slug: "pharmacy-stock-expiry",
    title: "Pharmacy Stock and Expiry Control",
    shortTitle: "Pharmacy Stock",
    category: "Retail",
    score: 8.3,
    setupFee: 10000,
    monthlyFee: 500,
    supportCost: 120,
    defaultCustomers: 1000,
    serviceableTarget: "Pharmacy reporting points to more than 220,000 licensed pharmacies. Start with small pharmacies outside premium chains.",
    thesis: "Expiry loss, batch confusion, supplier dues, and fast-moving stockouts are real pharmacy problems.",
    corePain: "Expired stock becomes dead loss and batch tracking is hard in notebooks.",
    mvp: [
      "Medicine list",
      "Batch and expiry",
      "Purchase",
      "Supplier due",
      "Sale return",
      "Near-expiry report",
      "Low-stock alert"
    ],
    pricingLogic: "BDT 500/month is safer than BDT 200 because product catalog and expiry support are heavier.",
    saleLine: "One expired box can cost more than the monthly fee.",
    notBuild: [
      "Do not give medical advice.",
      "Do not build telemedicine.",
      "Do not promise legal compliance without expert review."
    ],
    validation: [
      "Pharmacy count is large.",
      "Expiry loss is easy to understand.",
      "Batch tracking is daily pain.",
      "Owners can pay more than ordinary shops."
    ],
    launchPlan: [
      "Start with 20 pharmacies.",
      "Enter top 300 products.",
      "Prove near-expiry report.",
      "Add barcode later."
    ],
    risks: [
      "Large catalog.",
      "Wrong expiry entry.",
      "Formal record resistance."
    ],
    mitigations: [
      "Start with high-moving items.",
      "Quick duplicate entry.",
      "Owner-private reports."
    ]
  },
  {
    id: "clinic",
    rank: 8,
    slug: "doctor-clinic-serial-reminder",
    title: "Doctor Chamber and Clinic Serial System",
    shortTitle: "Clinic Serial",
    category: "Health",
    score: 8.2,
    setupFee: 10000,
    monthlyFee: 700,
    supportCost: 140,
    defaultCustomers: 500,
    serviceableTarget: "Private health facilities, doctor chambers, dental clinics, physiotherapy centers, and diagnostic collection points all deal with serial and waiting-room pressure.",
    thesis: "Patients want to know their serial. Chambers want fewer phone calls and a cleaner queue.",
    corePain: "Assistant writes names in notebook, patients call repeatedly, and serial disputes happen in waiting rooms.",
    mvp: [
      "Patient serial",
      "Doctor schedule",
      "SMS/WhatsApp token text",
      "Visit status",
      "Payment note",
      "Basic patient history note",
      "Daily chamber report"
    ],
    pricingLogic: "BDT 700/month is possible because health chambers value schedule control and patient communication.",
    saleLine: "Patients know their serial without crowding the desk.",
    notBuild: [
      "Do not build medical diagnosis.",
      "Do not store sensitive records without consent.",
      "Do not claim hospital-grade EMR."
    ],
    validation: [
      "Private health facility count is significant.",
      "Waiting room pain is visible.",
      "Chambers already use assistants.",
      "SMS/WhatsApp reminders are natural."
    ],
    launchPlan: [
      "Pilot with 5 chambers.",
      "Train assistants.",
      "Use serial display on old monitor.",
      "Add appointment slots after walk-in serial works."
    ],
    risks: [
      "Sensitive health data.",
      "Doctor schedule changes.",
      "Assistant resistance."
    ],
    mitigations: [
      "Collect minimal data first.",
      "Fast reschedule controls.",
      "Assistant-friendly UI."
    ]
  },
  {
    id: "diagnostic",
    rank: 9,
    slug: "diagnostic-token-report-delivery",
    title: "Diagnostic Center Token and Report Delivery",
    shortTitle: "Diagnostic Reports",
    category: "Health",
    score: 8.1,
    setupFee: 15000,
    monthlyFee: 1000,
    supportCost: 220,
    defaultCustomers: 300,
    serviceableTarget: "Target small diagnostic centers and collection points that need token, sample, report-ready, and delivery tracking without a large hospital system.",
    thesis: "Patients ask when reports are ready. Staff need token control, payment status, and delivery proof.",
    corePain: "Report status calls waste time and patients return too early or too late.",
    mvp: [
      "Token generation",
      "Test list",
      "Payment due",
      "Sample collected status",
      "Report ready status",
      "SMS/WhatsApp-ready message",
      "Daily test report"
    ],
    pricingLogic: "BDT 1,000/month is realistic because each center handles many patients and support needs are higher.",
    saleLine: "Patients know report status without calling again and again.",
    notBuild: [
      "Do not build lab-machine integration first.",
      "Do not store complex medical records first.",
      "Do not promise regulatory compliance."
    ],
    validation: [
      "Private diagnostic centers are widespread.",
      "Report-ready status is a repeated daily question.",
      "Centers can pay more than micro shops.",
      "Token systems reduce desk pressure."
    ],
    launchPlan: [
      "Pilot with collection points.",
      "Use test templates.",
      "Make report-ready messaging excellent.",
      "Add PDF upload later."
    ],
    risks: [
      "Data sensitivity.",
      "Custom test pricing.",
      "Staff workflow mismatch."
    ],
    mitigations: [
      "Minimal patient data.",
      "Configurable test list.",
      "Observe desk workflow before coding extras."
    ]
  },
  {
    id: "hotel",
    rank: 10,
    slug: "micro-hotel-room-booking",
    title: "Micro Hotel and Guesthouse Room Manager",
    shortTitle: "Hotel Rooms",
    category: "Hospitality",
    score: 7.9,
    setupFee: 15000,
    monthlyFee: 700,
    supportCost: 180,
    defaultCustomers: 500,
    serviceableTarget: "Target guesthouses, lodges, rest houses, and hotels near hospitals, stations, and district markets.",
    thesis: "Owners need room status, due, booking hold, cleaning, and cash visibility across shifts.",
    corePain: "Room status and cash are split across notebooks, and staff can hide leakage.",
    mvp: [
      "Room grid",
      "Check-in/check-out",
      "Booking hold",
      "Guest note",
      "Payment and due",
      "Housekeeping status",
      "Daily occupancy report"
    ],
    pricingLogic: "BDT 700/month is reasonable because owners buy shift accountability and room control.",
    saleLine: "Every room has a status and owner sees cash without calling the counter.",
    notBuild: [
      "Do not become Booking.com.",
      "Do not add OTA integration first.",
      "Do not make legal promises."
    ],
    validation: [
      "Accommodation exists in every district town.",
      "Room leakage is direct owner pain.",
      "Higher setup fee is possible.",
      "Old phone/tablet can run the room board."
    ],
    launchPlan: [
      "Sell to guesthouses near hospital/station.",
      "Set up room map.",
      "Train both shifts.",
      "Add owner dashboard later."
    ],
    risks: [
      "Staff resistance.",
      "Guest identity rules.",
      "Custom room rates."
    ],
    mitigations: [
      "Owner-only audit log.",
      "Printable register.",
      "Simple rate rules."
    ]
  },
  {
    id: "tailor",
    rank: 11,
    slug: "tailor-boutique-order-manager",
    title: "Tailor and Boutique Order Manager",
    shortTitle: "Tailor Orders",
    category: "Service",
    score: 7.8,
    setupFee: 5000,
    monthlyFee: 250,
    supportCost: 70,
    defaultCustomers: 1000,
    serviceableTarget: "Target tailoring clusters, ladies boutiques, alteration shops, and Eid-season high-volume businesses.",
    thesis: "Measurements, delivery dates, advance payments, and order status get lost in paper notebooks.",
    corePain: "Customers ask if orders are ready, measurements are misplaced, and dues are unclear.",
    mvp: [
      "Customer measurements",
      "Order photo",
      "Delivery date",
      "Advance and due",
      "Work status",
      "Staff assignment",
      "Pickup reminder"
    ],
    pricingLogic: "BDT 250/month is acceptable because support burden is lower. Cloud backup can be BDT 350/month.",
    saleLine: "Measurements and delivery promises never disappear.",
    notBuild: [
      "Do not build a fashion product shop.",
      "Do not add inventory first.",
      "Do not overcomplicate measurements."
    ],
    validation: [
      "Tailoring is everywhere.",
      "Seasonal pressure is high.",
      "Measurements are valuable data.",
      "Photo-first entry reduces typing."
    ],
    launchPlan: [
      "Pilot before Eid season.",
      "Make measurement setup fast.",
      "Print job slips.",
      "Use reminders as retention."
    ],
    risks: [
      "Typing resistance.",
      "Seasonal churn.",
      "Different measurement styles."
    ],
    mitigations: [
      "Photo-first entry.",
      "Annual plan.",
      "Custom labels."
    ]
  },
  {
    id: "repair",
    rank: 12,
    slug: "repair-shop-job-card",
    title: "Repair Shop Job Card and Warranty",
    shortTitle: "Repair Job Card",
    category: "Service",
    score: 7.7,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 80,
    defaultCustomers: 1000,
    serviceableTarget: "Target mobile repair, electronics repair, computer service, motorcycle workshops, and AC repair desks.",
    thesis: "Repair shops need job cards, device photos, parts used, warranty dates, pickup reminders, and technician commissions.",
    corePain: "Warranty arguments happen because proof, parts, and repair history are scattered.",
    mvp: [
      "Job card",
      "Device photo",
      "Problem note",
      "Parts used",
      "Warranty date",
      "Pickup reminder",
      "Technician commission"
    ],
    pricingLogic: "BDT 300/month is realistic. Cloud photo backup should be a higher tier.",
    saleLine: "Every repair has proof: photo, issue, parts, warranty, due, and technician.",
    notBuild: [
      "Do not build repair marketplace.",
      "Do not add heavy inventory first.",
      "Do not require long forms."
    ],
    validation: [
      "Repair shops cluster in every town.",
      "Warranty dispute is real pain.",
      "Photo proof is easy to understand.",
      "Commission tracking hooks owners."
    ],
    launchPlan: [
      "Start in mobile repair markets.",
      "Use one-minute job card.",
      "Add printed receipt later.",
      "Sell photo backup as pro."
    ],
    risks: [
      "Technicians avoid data entry.",
      "Photos use storage.",
      "Parts inventory pressure."
    ],
    mitigations: [
      "Camera-first input.",
      "Compress photos.",
      "Simple parts list."
    ]
  },
  {
    id: "laundry",
    rank: 13,
    slug: "laundry-order-pickup-tracker",
    title: "Laundry and Dry-Clean Order Tracker",
    shortTitle: "Laundry Orders",
    category: "Service",
    score: 7.6,
    setupFee: 8000,
    monthlyFee: 500,
    supportCost: 120,
    defaultCustomers: 700,
    serviceableTarget: "Target urban laundry shops, dry cleaners, hostel laundry operators, and pickup/delivery laundry services.",
    thesis: "Laundry customers want pickup status, item count, due bill, and delivery promise without confusion.",
    corePain: "Clothes get misplaced, item count is disputed, pickup/delivery timing is unclear, and bills are written manually.",
    mvp: [
      "Order ticket",
      "Garment count",
      "Service type",
      "Pickup/delivery status",
      "Customer due",
      "Delivery rider note",
      "Daily order report"
    ],
    pricingLogic: "BDT 500/month is practical for urban shops because order tracking saves disputes and staff time.",
    saleLine: "Every laundry order has item count, status, bill, and delivery date.",
    notBuild: [
      "Do not build national laundry marketplace.",
      "Do not add rider app first.",
      "Do not include unlimited SMS."
    ],
    validation: [
      "Existing laundry apps show demand in urban Bangladesh.",
      "Dispute reduction has clear value.",
      "Pickup/delivery tracking fits mobile use.",
      "Repeat customers can be retained by reminders."
    ],
    launchPlan: [
      "Pilot with 10 laundry shops.",
      "Print order tags.",
      "Make pickup-ready message easy.",
      "Add rider flow later."
    ],
    risks: [
      "Tagging discipline.",
      "Lost clothes blame.",
      "Delivery complexity."
    ],
    mitigations: [
      "Item photo option.",
      "Clear status log.",
      "Delivery as pro module."
    ]
  },
  {
    id: "gym",
    rank: 14,
    slug: "gym-membership-attendance",
    title: "Gym Membership and Trainer Commission",
    shortTitle: "Gym Members",
    category: "Fitness",
    score: 7.5,
    setupFee: 8000,
    monthlyFee: 500,
    supportCost: 100,
    defaultCustomers: 700,
    serviceableTarget: "Target gyms, fitness centers, martial arts schools, and ladies-only fitness studios in city and district areas.",
    thesis: "Gyms need membership renewal, attendance, trainer commission, package expiry, and payment reminders.",
    corePain: "Members forget renewal, owners cannot see active/inactive members, and trainer commission is messy.",
    mvp: [
      "Member profile",
      "Package expiry",
      "Attendance",
      "Renewal reminder",
      "Trainer commission",
      "Due payment",
      "Daily cash report"
    ],
    pricingLogic: "BDT 500/month is reasonable where even a few retained members cover the fee.",
    saleLine: "Know who is active, who expired, and which trainer earned commission.",
    notBuild: [
      "Do not build fitness content app first.",
      "Do not add diet plans first.",
      "Do not build consumer marketplace."
    ],
    validation: [
      "Fitness locations are growing in cities.",
      "Membership renewal is recurring.",
      "Trainer commission is owner-visible.",
      "Reminders can recover missed payments."
    ],
    launchPlan: [
      "Pilot with 5 gyms.",
      "Import members.",
      "Use expiry reminder first.",
      "Add QR attendance later."
    ],
    risks: [
      "Low-tech reception staff.",
      "Member privacy.",
      "Custom packages."
    ],
    mitigations: [
      "Simple check-in.",
      "Minimal data.",
      "Configurable packages."
    ]
  },
  {
    id: "bariwala-rent",
    rank: 15,
    slug: "bariwala-market-shop-rent-manager",
    title: "Bariwala and Market Shop Rent Manager",
    shortTitle: "Bariwala Rent",
    category: "Property",
    score: 9.1,
    setupFee: 8000,
    monthlyFee: 500,
    supportCost: 100,
    defaultCustomers: 1000,
    serviceableTarget: "Target bariwala, flat owners, small building owners, market owners, bazar committees, and shop landlords who collect rent every month from tenants.",
    thesis: "Bariwala and market owners need one place for monthly rent, shop rent, electricity, service charge, advance, due, notice, and receipt.",
    corePain: "Rent is collected by cash, bKash, notebook, or memory. Tenants delay payment, receipts are unclear, electricity/service charges are disputed, and the owner cannot see monthly due quickly.",
    mvp: [
      "Tenant and shop list",
      "Flat/room/shop rent setup",
      "Monthly rent bill",
      "Electricity and service charge",
      "Advance/security deposit record",
      "Payment receipt",
      "Due reminder and monthly owner report"
    ],
    pricingLogic: "BDT 500/month is practical for small landlords. For market owners with many shops, charge BDT 1,000-2,000/month or per 50 tenants because rent collection is high-value.",
    saleLine: "The bariwala sees who paid, who is due, which shop owes electricity, and can send a clean receipt.",
    notBuild: [
      "Do not build a house-rental marketplace first.",
      "Do not custody rent money first.",
      "Do not add legal eviction tools."
    ],
    validation: [
      "Retail and repair are the largest economic-unit block, so market/shop rent is a large recurring workflow.",
      "Rent receipt and landlord-tenant disputes are known Bangladesh pain points.",
      "Rent repeats monthly, which fits subscription software.",
      "Market owners and bariwala can pay more than a single tenant because one account manages many units."
    ],
    launchPlan: [
      "Pilot with 5 bariwala or market owners.",
      "Enter tenant/shop list and monthly rent amount.",
      "Generate first month's bills and receipts.",
      "Add tenant SMS/WhatsApp due reminder after owner trusts the record."
    ],
    risks: [
      "Owners may not want tenants to see full records.",
      "Cash payment creates proof disputes.",
      "Each market has custom charges."
    ],
    mitigations: [
      "Owner-only dashboard with optional tenant receipt page.",
      "Receipt number and payment note without holding money.",
      "Configurable charge types for electricity, service, guard, generator, and market fee."
    ]
  },
  {
    id: "mosque",
    rank: 16,
    slug: "mosque-maktab-donation-manager",
    title: "Mosque, Maktab, and Donation Manager",
    shortTitle: "Mosque Manager",
    category: "Community",
    score: 7.4,
    setupFee: 7000,
    monthlyFee: 300,
    supportCost: 70,
    defaultCustomers: 1000,
    serviceableTarget: "Target local mosques, maktabs, Islamic schools, and community committees that track donations, expenses, and student fees manually.",
    thesis: "Mosque committees need transparent donation, expense, maktab fee, and announcement records.",
    corePain: "Donation and expense records can become sensitive when notebooks are unclear.",
    mvp: [
      "Donation record",
      "Expense record",
      "Maktab student fee",
      "Teacher payment",
      "Monthly balance",
      "Announcement list",
      "Printable report"
    ],
    pricingLogic: "BDT 300/month is suitable if setup is paid and reports are fixed. Keep this low-cost and trust-focused.",
    saleLine: "The committee can show clear monthly income and expenses.",
    notBuild: [
      "Do not custody donations first.",
      "Do not add political content.",
      "Do not force online payment."
    ],
    validation: [
      "Mosques and maktabs are everywhere.",
      "Transparency is valuable.",
      "Monthly reports are recurring.",
      "Simple printed reports can build trust."
    ],
    launchPlan: [
      "Start with known community committees.",
      "Create monthly report template.",
      "Train one treasurer.",
      "Add public notice page later."
    ],
    risks: [
      "Trust sensitivity.",
      "Low budget.",
      "Committee changes."
    ],
    mitigations: [
      "Transparent logs.",
      "Annual low-cost plan.",
      "Easy admin transfer."
    ]
  },
  {
    id: "hajj",
    rank: 17,
    slug: "hajj-umrah-agency-crm",
    title: "Hajj and Umrah Agency CRM",
    shortTitle: "Hajj CRM",
    category: "Travel",
    score: 7.4,
    setupFee: 20000,
    monthlyFee: 1200,
    supportCost: 240,
    defaultCustomers: 300,
    serviceableTarget: "Target Hajj/Umrah agencies and religious travel organizers handling passport, visa, payment schedule, training, group, and document checklists.",
    thesis: "Agencies need document, payment, group, training, and departure tracking for many pilgrims.",
    corePain: "Passport copies, visa status, payment installments, and training attendance are scattered across folders and spreadsheets.",
    mvp: [
      "Pilgrim profile",
      "Document checklist",
      "Payment schedule",
      "Group assignment",
      "Training attendance",
      "Flight note",
      "Reminder messages"
    ],
    pricingLogic: "BDT 1,200/month is reasonable because one agency handles many clients and mistakes are expensive.",
    saleLine: "Every pilgrim's document, payment, and group status stays visible.",
    notBuild: [
      "Do not sell religious ruling advice.",
      "Do not handle client money custody.",
      "Do not promise visa approval."
    ],
    validation: [
      "Religious travel is recurring.",
      "Document mistakes are costly.",
      "Agencies have higher payment capacity.",
      "Checklist workflow is easy to demonstrate."
    ],
    launchPlan: [
      "Pilot with 3 agencies.",
      "Create document checklist.",
      "Add payment reminders.",
      "Add group training attendance."
    ],
    risks: [
      "Seasonal demand.",
      "Sensitive passport data.",
      "Custom agency workflows."
    ],
    mitigations: [
      "Annual contract.",
      "Minimal secure data.",
      "Configurable checklist."
    ]
  },
  {
    id: "bus-counter",
    rank: 18,
    slug: "bus-counter-seat-ticketing",
    title: "Bus Counter Seat and Ticket Manager",
    shortTitle: "Bus Counter",
    category: "Transport",
    score: 7.3,
    setupFee: 25000,
    monthlyFee: 1500,
    supportCost: 300,
    defaultCustomers: 200,
    serviceableTarget: "Target small bus operators, counters, route-based micro operators, and agent counters that still manage seats manually.",
    thesis: "Counter-based transport needs live seats, agent commission, route sales, and no double-booking.",
    corePain: "Seats get double-sold, agent cash is unclear, and route performance is not visible.",
    mvp: [
      "Route setup",
      "Seat map",
      "Counter ticket",
      "Agent commission",
      "Trip sales",
      "Cancellation note",
      "Daily counter report"
    ],
    pricingLogic: "BDT 1,500/month is possible because operators have higher transaction volume and double-booking is costly.",
    saleLine: "No double seat, clear counter sales, and agent commission in one place.",
    notBuild: [
      "Do not build national passenger marketplace first.",
      "Do not add payment gateway first.",
      "Do not support every transport mode."
    ],
    validation: [
      "Transport ticketing solutions already exist, proving the workflow.",
      "Manual counters still have pain.",
      "Operators can pay more than shops.",
      "Agent commission is a strong hook."
    ],
    launchPlan: [
      "Start with one route operator.",
      "Build fixed seat layout.",
      "Train counter staff.",
      "Add online booking later."
    ],
    risks: [
      "Operational complexity.",
      "Counter staff resistance.",
      "Refund disputes."
    ],
    mitigations: [
      "Start with one route.",
      "Fast ticket printing.",
      "Clear cancellation log."
    ]
  },
  {
    id: "courier",
    rank: 19,
    slug: "local-courier-parcel-tracker",
    title: "Local Courier and Parcel Counter Tracker",
    shortTitle: "Parcel Tracker",
    category: "Logistics",
    score: 7.2,
    setupFee: 12000,
    monthlyFee: 800,
    supportCost: 160,
    defaultCustomers: 500,
    serviceableTarget: "Target local courier counters, district parcel services, market delivery operators, and small logistics shops.",
    thesis: "Parcel counters need booking, status, delivery proof, cash, and customer message tracking.",
    corePain: "Customers ask where parcels are, staff search notebooks, and delivery proof is weak.",
    mvp: [
      "Parcel booking",
      "Sender/receiver",
      "Status update",
      "Delivery proof",
      "Cash due",
      "Branch note",
      "Daily parcel report"
    ],
    pricingLogic: "BDT 800/month can work because counters process many parcels and status calls cost time.",
    saleLine: "Every parcel has a status and proof.",
    notBuild: [
      "Do not build national courier network.",
      "Do not add rider GPS first.",
      "Do not custody COD money first."
    ],
    validation: [
      "Courier pain is visible in Bangladesh local delivery.",
      "Status tracking reduces calls.",
      "Branch counters can pay per location.",
      "Proof of delivery reduces disputes."
    ],
    launchPlan: [
      "Pilot with 3 counters.",
      "Print parcel ID slips.",
      "Use WhatsApp status sharing.",
      "Add branch transfer later."
    ],
    risks: [
      "COD complexity.",
      "Lost parcel blame.",
      "Multi-branch sync."
    ],
    mitigations: [
      "No custody at first.",
      "Photo proof.",
      "Cloud tier for branches."
    ]
  },
  {
    id: "distributor",
    rank: 20,
    slug: "distributor-due-collection",
    title: "Distributor Due Collection and Sales Rep App",
    shortTitle: "Distributor Dues",
    category: "Wholesale",
    score: 7.2,
    setupFee: 20000,
    monthlyFee: 1000,
    supportCost: 220,
    defaultCustomers: 500,
    serviceableTarget: "Target wholesalers, FMCG distributors, bakery suppliers, water delivery operators, and route sellers.",
    thesis: "Wholesalers care about route orders, shop dues, collection receipts, and sales rep accountability.",
    corePain: "Sales reps collect cash and orders in notebooks. Owner sees overdue shops late.",
    mvp: [
      "Customer/shop list",
      "Route plan",
      "Order entry",
      "Due ledger",
      "Collection receipt",
      "Rep daily report",
      "Owner dashboard"
    ],
    pricingLogic: "BDT 1,000/month is realistic because receivables are direct cash-flow pain.",
    saleLine: "Know which shop owes money and which rep collected today.",
    notBuild: [
      "Do not build full distribution ERP.",
      "Do not add warehouse automation first.",
      "Do not customize every route rule."
    ],
    validation: [
      "Wholesalers have higher willingness to pay.",
      "Receivables hurt cash flow.",
      "Rep accountability is owner-visible.",
      "Per-user pricing can grow."
    ],
    launchPlan: [
      "Choose one vertical.",
      "Pilot with 2-5 reps.",
      "Make receipt excellent.",
      "Add route analytics later."
    ],
    risks: [
      "Longer sales cycle.",
      "Customization pressure.",
      "Rep adoption."
    ],
    mitigations: [
      "Charge implementation.",
      "Start one vertical.",
      "Simple rep app."
    ]
  },
  {
    id: "fish-farm",
    rank: 21,
    slug: "fish-farm-feed-harvest-ledger",
    title: "Fish Farm Feed and Harvest Ledger",
    shortTitle: "Fish Farm",
    category: "Agriculture",
    score: 7.1,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 80,
    defaultCustomers: 1000,
    serviceableTarget: "Fisheries statistics point to millions of fish farmers and fishers. Start with commercial pond owners and feed sellers who advise farmers.",
    thesis: "Fish farmers need pond cost, feed, medicine, mortality, harvest, and buyer records.",
    corePain: "Farmers often do not know true pond profit after feed, medicine, labor, and buyer dues.",
    mvp: [
      "Pond profile",
      "Fingerling entry",
      "Feed log",
      "Medicine log",
      "Mortality note",
      "Harvest sale",
      "Profit report"
    ],
    pricingLogic: "BDT 300/month is possible if sold through feed shops or local agents with group onboarding.",
    saleLine: "Know actual pond profit, not just sale amount.",
    notBuild: [
      "Do not build AI disease diagnosis first.",
      "Do not sell financial loans.",
      "Do not require constant internet."
    ],
    validation: [
      "Fish farmer base is large.",
      "Feed cost is major expense.",
      "Profit calculation is practical.",
      "Feed shops can become distribution partners."
    ],
    launchPlan: [
      "Partner with one feed shop.",
      "Onboard 20 pond owners.",
      "Track one production cycle.",
      "Add advisory later."
    ],
    risks: [
      "Low digital literacy.",
      "Seasonal cycles.",
      "Rural support cost."
    ],
    mitigations: [
      "Agent-assisted entry.",
      "Cycle-based reports.",
      "Offline-first app."
    ]
  },
  {
    id: "poultry",
    rank: 22,
    slug: "poultry-batch-cost-manager",
    title: "Poultry Batch Cost and Medicine Manager",
    shortTitle: "Poultry Batch",
    category: "Agriculture",
    score: 7.0,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 80,
    defaultCustomers: 1000,
    serviceableTarget: "Target broiler, layer, and Sonali farms through feed dealers and local veterinary medicine shops.",
    thesis: "Poultry farmers need batch cost, feed, medicine, mortality, sale weight, and profit in one place.",
    corePain: "Farmers sell birds but may not know true batch profit after feed and medicine.",
    mvp: [
      "Batch setup",
      "Chick count",
      "Feed log",
      "Medicine/vaccine log",
      "Mortality count",
      "Sale weight",
      "Batch profit"
    ],
    pricingLogic: "BDT 300/month is realistic when sold through local feed/vet shop channels.",
    saleLine: "Know if the batch made money before starting the next one.",
    notBuild: [
      "Do not provide veterinary diagnosis.",
      "Do not sell medicine advice as a doctor.",
      "Do not add IoT first."
    ],
    validation: [
      "Commercial poultry farms are widespread.",
      "Feed/medicine cost is daily pain.",
      "Batch profit is easy to explain.",
      "Dealers can distribute the app."
    ],
    launchPlan: [
      "Pilot with 20 farms.",
      "Track one batch.",
      "Show profit report.",
      "Add reminder templates later."
    ],
    risks: [
      "Farmer typing burden.",
      "Disease events.",
      "Agent support cost."
    ],
    mitigations: [
      "Daily quick entry.",
      "No medical claims.",
      "Dealer-assisted onboarding."
    ]
  },
  {
    id: "dairy",
    rank: 23,
    slug: "dairy-milk-cattle-ledger",
    title: "Dairy Milk and Cattle Health Ledger",
    shortTitle: "Dairy Ledger",
    category: "Agriculture",
    score: 6.9,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 80,
    defaultCustomers: 1000,
    serviceableTarget: "Target dairy farmers, milk collectors, and small chilling-center networks where daily milk volume and cattle health records matter.",
    thesis: "Dairy farmers need milk yield, feed cost, breeding, vaccination, treatment, and buyer payment records.",
    corePain: "Daily milk sale looks good but feed, treatment, and unpaid buyer dues reduce true profit.",
    mvp: [
      "Cow profile",
      "Daily milk entry",
      "Feed cost",
      "Treatment note",
      "Breeding/vaccine reminder",
      "Buyer payment",
      "Monthly profit"
    ],
    pricingLogic: "BDT 300/month works if sold through cooperatives, collectors, or veterinary supply shops.",
    saleLine: "Know which cow is profitable and which buyer owes money.",
    notBuild: [
      "Do not build cattle insurance first.",
      "Do not provide veterinary diagnosis.",
      "Do not require sensors."
    ],
    validation: [
      "Livestock projects show organized dairy farmer groups.",
      "Milk entry is daily habit.",
      "Buyer dues are common.",
      "Health reminders have practical value."
    ],
    launchPlan: [
      "Work with one collector.",
      "Track 30 farmers.",
      "Make milk payment report.",
      "Add health reminders."
    ],
    risks: [
      "Rural support.",
      "Farmer literacy.",
      "Low monthly willingness."
    ],
    mitigations: [
      "Group pricing.",
      "Voice/number-first entry.",
      "Agent-assisted setup."
    ]
  },
  {
    id: "agro-input",
    rank: 24,
    slug: "agro-input-shop-farmer-due",
    title: "Agro-Input Shop and Farmer Due Manager",
    shortTitle: "Agro Shop",
    category: "Retail",
    score: 6.9,
    setupFee: 6000,
    monthlyFee: 300,
    supportCost: 90,
    defaultCustomers: 1000,
    serviceableTarget: "Target seed, fertilizer, pesticide, irrigation, and feed shops that sell to farmers on cash and due.",
    thesis: "Agro-input shops need stock, farmer dues, seasonal sales, supplier dues, and expiry/batch notes.",
    corePain: "Farmer dues and seasonal stock are hard to manage in notebooks.",
    mvp: [
      "Product stock",
      "Farmer profile",
      "Due ledger",
      "Supplier due",
      "Expiry/batch note",
      "Seasonal sales report",
      "Backup"
    ],
    pricingLogic: "BDT 300/month is practical because agro shops are retail plus advisory hubs.",
    saleLine: "Know which farmer owes, which product is low, and which season sold best.",
    notBuild: [
      "Do not give pesticide advice first.",
      "Do not build farmer marketplace.",
      "Do not add credit products."
    ],
    validation: [
      "Farmer base is huge.",
      "Agro shops already act as local hubs.",
      "Due ledger is daily pain.",
      "Expiry/batch matters for inputs."
    ],
    launchPlan: [
      "Pilot with 10 agro shops.",
      "Import product list.",
      "Use due collection report.",
      "Add seasonal dashboard later."
    ],
    risks: [
      "Seasonal usage.",
      "Complex products.",
      "Low support tolerance."
    ],
    mitigations: [
      "Starter product templates.",
      "Simple due screen.",
      "Cloud backup upsell."
    ]
  },
  {
    id: "cold-storage",
    rank: 25,
    slug: "warehouse-cold-storage-receipt",
    title: "Warehouse and Cold Storage Receipt Manager",
    shortTitle: "Storage Receipt",
    category: "Logistics",
    score: 6.8,
    setupFee: 20000,
    monthlyFee: 1200,
    supportCost: 260,
    defaultCustomers: 300,
    serviceableTarget: "Target cold storages, small warehouses, seed storage operators, and market godowns with receipt and release workflows.",
    thesis: "Storage operators need receipt, lot, owner, quantity, rent, release, and payment tracking.",
    corePain: "Stored goods and release payments can become disputed without clean receipts.",
    mvp: [
      "Lot receipt",
      "Owner/customer profile",
      "Quantity",
      "Storage rent",
      "Partial release",
      "Payment due",
      "Inventory summary"
    ],
    pricingLogic: "BDT 1,200/month is possible because transaction value is higher and disputes are costly.",
    saleLine: "Every stored lot has a receipt, rent, payment, and release history.",
    notBuild: [
      "Do not add IoT temperature first.",
      "Do not manage financing.",
      "Do not support complex WMS first."
    ],
    validation: [
      "Warehouse/cold storage records are high-value.",
      "Receipts reduce disputes.",
      "Storage operators can pay more.",
      "Partial release is a strong workflow."
    ],
    launchPlan: [
      "Pilot with one godown.",
      "Digitize receipt book.",
      "Add partial release.",
      "Export monthly storage rent."
    ],
    risks: [
      "Custom workflows.",
      "Data migration.",
      "Owner trust."
    ],
    mitigations: [
      "Start with receipt flow.",
      "Charge setup.",
      "Printable backups."
    ]
  },
  {
    id: "dental",
    rank: 26,
    slug: "dental-clinic-appointment-followup",
    title: "Dental Clinic Appointment and Follow-Up",
    shortTitle: "Dental Follow-Up",
    category: "Health",
    score: 6.8,
    setupFee: 10000,
    monthlyFee: 700,
    supportCost: 150,
    defaultCustomers: 500,
    serviceableTarget: "Public map datasets show more than 6,000 dental clinics. Target small clinics needing appointments and treatment follow-up.",
    thesis: "Dental clinics need serial, treatment plan, follow-up date, payment due, and reminder messages.",
    corePain: "Patients forget follow-up and payment schedules; clinic assistants track everything manually.",
    mvp: [
      "Appointment",
      "Patient profile",
      "Treatment note",
      "Follow-up reminder",
      "Payment due",
      "Doctor schedule",
      "Daily report"
    ],
    pricingLogic: "BDT 700/month is practical because follow-up retention can pay for the software.",
    saleLine: "Patients return on time and the clinic sees treatment dues clearly.",
    notBuild: [
      "Do not build diagnosis tools.",
      "Do not store images first.",
      "Do not claim medical compliance."
    ],
    validation: [
      "Dental clinic count is visible.",
      "Follow-up is recurring.",
      "Assistants already manage serials.",
      "Patient reminders have clear value."
    ],
    launchPlan: [
      "Pilot with 5 clinics.",
      "Use follow-up reminders.",
      "Add payment due.",
      "Add treatment templates later."
    ],
    risks: [
      "Health data sensitivity.",
      "Custom treatment types.",
      "Assistant workflow."
    ],
    mitigations: [
      "Minimal data.",
      "Flexible treatment labels.",
      "Fast assistant UI."
    ]
  },
  {
    id: "home-service",
    rank: 27,
    slug: "home-service-job-scheduler",
    title: "Home Service Job Scheduler",
    shortTitle: "Home Service",
    category: "Service",
    score: 6.7,
    setupFee: 10000,
    monthlyFee: 700,
    supportCost: 140,
    defaultCustomers: 500,
    serviceableTarget: "Target AC repair teams, cleaning teams, electricians, plumbers, shifting teams, and small service agencies.",
    thesis: "Home service businesses need booking, technician assignment, job status, customer due, and service warranty.",
    corePain: "Jobs are booked by phone, technicians forget timing, and owners do not know which job is paid.",
    mvp: [
      "Job booking",
      "Technician assignment",
      "Customer address",
      "Status",
      "Service charge",
      "Warranty date",
      "Daily job report"
    ],
    pricingLogic: "BDT 700/month works for teams with multiple jobs per day and several workers.",
    saleLine: "Every job has technician, time, status, charge, and warranty.",
    notBuild: [
      "Do not build open marketplace first.",
      "Do not add live GPS first.",
      "Do not promise background checks."
    ],
    validation: [
      "Local-service platforms exist, proving demand.",
      "Small teams need internal scheduling.",
      "Warranty record reduces disputes.",
      "Technician assignment is owner-visible."
    ],
    launchPlan: [
      "Start with AC repair teams.",
      "Track 50 jobs.",
      "Make warranty receipt.",
      "Add customer page later."
    ],
    risks: [
      "Technician adoption.",
      "Address complexity.",
      "Customer no-shows."
    ],
    mitigations: [
      "Owner/dispatcher entry first.",
      "Map link field.",
      "Reminder messages."
    ]
  },
  {
    id: "wedding-hall",
    rank: 28,
    slug: "community-center-booking-calendar",
    title: "Community Center and Wedding Hall Booking",
    shortTitle: "Hall Booking",
    category: "Event",
    score: 6.7,
    setupFee: 15000,
    monthlyFee: 800,
    supportCost: 160,
    defaultCustomers: 300,
    serviceableTarget: "Target community centers, convention halls, rooftop venues, catering halls, and decorators handling date bookings.",
    thesis: "Venue owners need date hold, booking advance, due, package, decorator/catering note, and calendar visibility.",
    corePain: "Dates get double-booked or held without clear advance and due status.",
    mvp: [
      "Booking calendar",
      "Date hold",
      "Customer profile",
      "Package",
      "Advance/due",
      "Event note",
      "Monthly booking report"
    ],
    pricingLogic: "BDT 800/month is practical because one avoided double booking can save much more.",
    saleLine: "No double booking, clear advance, clear due, clear event date.",
    notBuild: [
      "Do not build public marketplace first.",
      "Do not add payment custody.",
      "Do not add complex event planning."
    ],
    validation: [
      "Wedding/event booking is recurring.",
      "Double-booking pain is high.",
      "Venues can pay more than micro shops.",
      "Calendar UI is easy to demonstrate."
    ],
    launchPlan: [
      "Pilot with 3 venues.",
      "Set up package list.",
      "Use date hold and payment due.",
      "Add public availability page later."
    ],
    risks: [
      "Seasonality.",
      "Custom packages.",
      "Owner/staff communication."
    ],
    mitigations: [
      "Annual contract.",
      "Simple package templates.",
      "Owner notifications."
    ]
  },
  {
    id: "ngos",
    rank: 29,
    slug: "ngo-training-attendance-stipend",
    title: "NGO Training Attendance and Stipend Tracker",
    shortTitle: "NGO Training",
    category: "Operations",
    score: 6.6,
    setupFee: 25000,
    monthlyFee: 1500,
    supportCost: 300,
    defaultCustomers: 200,
    serviceableTarget: "Target NGOs, training providers, donor-funded projects, youth skills centers, and field programs that need attendance, photo proof, and reporting.",
    thesis: "Training projects need clean participant lists, attendance, session proof, stipend status, and donor reports.",
    corePain: "Field teams collect paper attendance and later struggle to prepare reports.",
    mvp: [
      "Participant profile",
      "Batch/session",
      "Attendance",
      "Photo proof",
      "Stipend status",
      "Trainer note",
      "Export report"
    ],
    pricingLogic: "BDT 1,500/month plus setup is possible because NGOs value reporting and compliance.",
    saleLine: "Training attendance and report proof become ready without paper chaos.",
    notBuild: [
      "Do not handle stipend money custody.",
      "Do not fake attendance.",
      "Do not overbuild donor portal."
    ],
    validation: [
      "Bangladesh has many skills and NGO programs.",
      "Attendance proof is recurring.",
      "Reporting has direct value.",
      "Project budgets can pay higher setup."
    ],
    launchPlan: [
      "Start with one training provider.",
      "Digitize batch attendance.",
      "Export donor-ready report.",
      "Add field offline mode."
    ],
    risks: [
      "Procurement cycle.",
      "Custom donor formats.",
      "Field connectivity."
    ],
    mitigations: [
      "Charge setup.",
      "Configurable export.",
      "Offline capture."
    ]
  },
  {
    id: "office-doc-ai",
    rank: 30,
    slug: "office-document-ai-assistant",
    title: "Office Document AI Assistant for SMEs",
    shortTitle: "Document AI",
    category: "AI",
    score: 6.6,
    setupFee: 20000,
    monthlyFee: 2000,
    supportCost: 350,
    defaultCustomers: 200,
    serviceableTarget: "Target accountants, legal offices, exporters, agencies, school admins, clinics, and SMEs that process repeated letters, quotations, reports, and summaries.",
    thesis: "After AI training, the same clients need private templates and document workflows: quotation, meeting summary, HR letter, client reply, report draft.",
    corePain: "Staff rewrite similar documents again and again, and generic AI output does not follow company format.",
    mvp: [
      "Company template library",
      "Document generator",
      "Meeting summary prompt",
      "Quotation draft",
      "HR letter draft",
      "Approval checklist",
      "Usage log"
    ],
    pricingLogic: "BDT 2,000/month is practical for offices after they understand AI value through training.",
    saleLine: "Your office documents follow your own format and take minutes, not hours.",
    notBuild: [
      "Do not train on confidential data without consent.",
      "Do not promise legal accuracy.",
      "Do not build a general chatbot."
    ],
    validation: [
      "AI training creates the entry point.",
      "Document repetition is common in offices.",
      "SMEs can pay more for time savings.",
      "Templates create retention."
    ],
    launchPlan: [
      "Sell after corporate AI workshop.",
      "Build 10 templates per company.",
      "Add approval flow.",
      "Charge monthly for support and updates."
    ],
    risks: [
      "Data privacy.",
      "Wrong output.",
      "Tool fatigue."
    ],
    mitigations: [
      "Human approval required.",
      "Use safe templates.",
      "Start with 3 workflows."
    ]
  }
];

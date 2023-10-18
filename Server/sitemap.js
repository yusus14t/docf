const organizationModel = require("./models/organization-model");
const userModel = require("./models/user-model");

const getDynamicUrls = () => {
  // In this example, we're using a hardcoded array of URLs, but you should fetch them from your data source.
  const urls = `
    <url>
        <loc>https://doctortime.in/</loc>
    </url>
    <url>
        <loc>https://doctortime.in/about/</loc>
    </url>
    <url>
        <loc>https://doctortime.in/gynae</loc>
    </url>
    <url>
        <loc>https://doctortime.in/radiologist</loc>
    </url>
    <url>
        <loc>https://doctortime.in/clinics</loc>
    </url>
    <url>
        <loc>https://doctortime.in/hospitals</loc>
    </url>
    <url>
        <loc>https://doctortime.in/doctors</loc>
    </url>
    <url>
        <loc>https://doctortime.in/contact</loc>
    </url>
    <url>
        <loc>https://doctortime.in/homeopathy</loc>
    </url>
    <url>
        <loc>https://doctortime.in/contact</loc>
    </url>
    <url>
        <loc>https://doctortime.in/privacy</loc>
    </url>
    <url>
        <loc>https://doctortime.in/term</loc>
    </url>
    <url>
        <loc>https://doctortime.in/pricing-refund-policy</loc>
    </url>
  `;
  return urls;
};

module.exports.sitmaps = async (req, res) => {
  const urls = getDynamicUrls();

//   let organizations = await userModel.find({
//     userType:{$in:["HL","CL"]}
//   },
//   {
//     userType:1, organizationId :1
//   })
  let organizations = await organizationModel.find({organizationType: { $in: ["Hospital", "Clinic"] }, 'billing.isPaid': true },{ organizationType: 1 });

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  sitemap += urls;

  for (const organization of organizations) {
    sitemap += "<url>";
    // sitemap += `<loc>https://doctortime.in/${organization.organizationType == "Clinic" ? "clinic-detail" : "hospital-detail"}/${organization.organizationId}</loc>`;
    sitemap += `<loc>http://localhost:3000/${organization.organizationType == "Clinic" ? "clinic-detail" : "hospital-detail"}/${organization._id}</loc>`;

    sitemap += "</url>";
  }


  sitemap += "</urlset>";

  res.set("Content-Type", "text/xml");
  res.send(sitemap);
};

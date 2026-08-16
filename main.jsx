import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Check, ChevronDown, Instagram, MapPin, Menu, MessageCircle,
  Phone, Search, Send, ShieldCheck, Sparkles, Star, X, Upload, Hammer,
  Ruler, Gem, Truck, Facebook
} from "lucide-react";
import "./styles.css";

const PHONE = "8005604653";
const WHATSAPP = `https://wa.me/91${PHONE}`;
const MAPS = "https://maps.app.goo.gl/eFean4bRx1dWSh3w9?g_st=ic";
const INSTAGRAM = "https://www.instagram.com/jdfurnitureindustries/";
const CITY = "Sri Ganganagar, Rajasthan";

const categories = [
  ["Beds", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85", "Statement beds designed for comfort and lasting beauty."],
  ["Sofas", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85", "Elegant seating made around your space and lifestyle."],
  ["Dining Tables", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85", "Warm, durable dining pieces for everyday gatherings."],
  ["Wardrobes", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85", "Smart storage with a refined, built-to-fit finish."],
  ["TV Units", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", "Clean entertainment units with practical storage."],
  ["Sofa Cum Beds", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85", "Flexible comfort for living rooms and guest spaces."],
  ["Office Furniture", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85", "Professional desks and storage for productive spaces."],
  ["Iron Beds", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85", "Strong, practical designs with a modern character."],
  ["Custom Furniture", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85", "Your measurements, your design, your finish."],
  ["CNC Designs", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85", "Precision 2D/3D panels, carvings and decorative work."]
];

const products = [
  ["Modern Panel Bed", "Beds", "Contemporary wooden bed with a clean, premium profile.", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85", "Custom Made"],
  ["Lounge Sofa", "Sofas", "Deep-comfort seating with a refined showroom look.", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85", "Popular"],
  ["Solid Dining Table", "Tables", "A timeless dining centerpiece designed for daily use.", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85", "New"],
  ["Sliding Wardrobe", "Wardrobes", "Space-efficient storage with modern panel detailing.", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85", "Custom Made"],
  ["Designer TV Unit", "TV Units", "Minimal media storage with elegant wood textures.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", "Popular"],
  ["Sofa Cum Bed", "Sofa Cum Beds", "A practical two-in-one solution for modern homes.", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85", "New"]
];

const gallery = [
  ["Finished Furniture", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", "Custom Work"],
  ["Bedroom Craft", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85", "Beds"],
  ["Living Room", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85", "Sofas"],
  ["Dining Detail", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85", "Tables"],
  ["Wooden Interior", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85", "Custom Work"],
  ["Workshop Finish", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85", "Custom Work"],
  ["Office Setup", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85", "Custom Work"],
  ["Wardrobe Detail", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85", "Custom Work"]
];

function App(){
  const [menu,setMenu]=useState(false);
  const [category,setCategory]=useState("All");
  const [galleryFilter,setGalleryFilter]=useState("All");
  const [search,setSearch]=useState("");
  const [modal,setModal]=useState(null);
  const [sent,setSent]=useState(false);
  const [reviewName,setReviewName]=useState("");
  const [reviewText,setReviewText]=useState("");
  const [reviewRating,setReviewRating]=useState(5);
  const [reviewSent,setReviewSent]=useState(false);

  const filteredProducts=useMemo(()=>products.filter(p=>
    (category==="All" || p[1]===category) &&
    (p[0]+" "+p[1]+" "+p[2]).toLowerCase().includes(search.toLowerCase())
  ),[category,search]);

  const filteredGallery=useMemo(()=>gallery.filter(g=>galleryFilter==="All"||g[2]===galleryFilter),[galleryFilter]);

  const go=(id)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})};
  const enquire=(name="Furniture")=>{
    const text=encodeURIComponent(`Hello JD Furniture Industry, I am interested in ${name}. Please share details and pricing.`);
    window.open(`${WHATSAPP}?text=${text}`,"_blank");
  };
  const submit=(e)=>{
  e.preventDefault();

  const fd=new FormData(e.currentTarget);

  const name=fd.get("name") || "";
  const phone=fd.get("phone") || "";
  const city=fd.get("city") || "Not provided";
  const requirement=fd.get("requirement") || "Furniture requirement";
  const message=fd.get("message") || "Not provided";

  const text=encodeURIComponent(
`*NEW WEBSITE ENQUIRY*
*JD Furniture Industry*

Name: ${name}
Phone: ${phone}
City: ${city}
Requirement: ${requirement}
Message: ${message}

Please contact me regarding this enquiry.`
  );

  setSent(true);

const whatsappUrl = `https://wa.me/918005604653?text=${text}`;

window.location.assign(whatsappUrl);

setTimeout(() => setSent(false), 4500);
  };
  const submitReview=(e)=>{
    e.preventDefault();
    const review={name:reviewName.trim(),text:reviewText.trim(),rating:reviewRating};
    const existing=JSON.parse(localStorage.getItem("jd_pending_reviews")||"[]");
    localStorage.setItem("jd_pending_reviews",JSON.stringify([review,...existing]));
    setReviewName(""); setReviewText(""); setReviewRating(5); setReviewSent(true);
    setTimeout(()=>setReviewSent(false),4500);
  };

  return <div className="site">
    <div className="topbar"><span>Premium Furniture • Custom Designs • CNC Work</span><a href={WHATSAPP} target="_blank">WhatsApp: +91 80056 04653</a></div>
    <header className="header">
      <div className="container nav">
        <button className="brand" onClick={()=>go("home")} aria-label="JD Furniture Industry home">
          <span className="brandMark">JD</span><span><b>JD</b> Furniture Industry<small>CRAFTED FOR YOUR SPACE</small></span>
        </button>
        <nav className={menu?"navlinks open":"navlinks"}>
          {["home","about","products","custom","cnc","gallery","contact"].map(id=><button key={id} onClick={()=>go(id)}>{id==="cnc"?"CNC Work":id.replace(/^\w/,c=>c.toUpperCase())}</button>)}
          <a className="navWhatsapp" href={WHATSAPP} target="_blank"><MessageCircle size={17}/> WhatsApp Us</a>
        </nav>
        <button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
      </div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="heroImage"></div><div className="heroOverlay"></div>
        <div className="container heroContent">
          <div className="eyebrow"><Sparkles size={15}/> PREMIUM FURNITURE MANUFACTURING</div>
          <h1>Furniture Crafted<br/><em>for Your Space.</em></h1>
          <p>Premium wooden furniture, custom designs, CNC work and expert craftsmanship — made around the way you live.</p>
          <div className="heroActions"><button className="btn primary" onClick={()=>go("products")}>Explore Furniture <ArrowRight size={18}/></button><button className="btn ghost" onClick={()=>go("custom")}>Get a Custom Quote</button></div>
          <a className="heroWhatsapp" href={WHATSAPP} target="_blank"><MessageCircle size={20}/> Enquire on WhatsApp</a>
        </div>
        <div className="heroBottom"><span>Designed & Made in Sri Ganganagar</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="trust">
        <div className="container trustGrid">
          <div><ShieldCheck/><span><b>Premium Quality</b><small>Built for everyday living</small></span></div>
          <div><Ruler/><span><b>Made to Measure</b><small>Your size & requirements</small></span></div>
          <div><Gem/><span><b>Fine Finishing</b><small>Details that make a difference</small></span></div>
          <div><Hammer/><span><b>Expert Craft</b><small>Precision manufacturing</small></span></div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container twoCol">
          <div className="sectionPhoto"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90" alt="Premium furniture interior"/></div>
          <div className="sectionText"><div className="eyebrow dark">ABOUT JD FURNITURE INDUSTRY</div><h2>Made with purpose.<br/><em>Finished with pride.</em></h2>
          <p>JD Furniture Industry brings together thoughtful design, quality materials and skilled craftsmanship to create furniture that fits beautifully into real spaces.</p>
          <p>From a single custom bed to complete furniture projects, we manufacture around your measurements, style, colour and functional needs.</p>
          <div className="checkList">{["Custom Furniture","Premium Materials","CNC Precision","Skilled Craftsmanship","Made-to-Order Designs"].map(x=><div key={x}><Check size={17}/>{x}</div>)}</div>
          <button className="textBtn" onClick={()=>go("custom")}>Talk about your project <ArrowRight size={17}/></button></div>
        </div>
      </section>

      <section id="products" className="section productsSec">
        <div className="container">
          <div className="sectionHead"><div><div className="eyebrow dark">OUR COLLECTION</div><h2>Furniture for every <em>corner.</em></h2></div><p>Explore our core categories. Every piece can be discussed and customized around your space.</p></div>
          <div className="categoryGrid">{categories.map(c=><button className="categoryCard" key={c[0]} onClick={()=>{setCategory(c[0]);go("featured")}}><img src={c[1]} alt={c[0]}/><span><b>{c[0]}</b><small>{c[2]}</small><i>View Products <ArrowRight size={15}/></i></span></button>)}</div>

          <div id="featured" className="featured">
            <div className="sectionHead compact"><div><div className="eyebrow dark">FEATURED</div><h2>Selected <em>pieces.</em></h2></div>
              <div className="tools"><div className="search"><Search size={17}/><input placeholder="Search furniture" value={search} onChange={e=>setSearch(e.target.value)}/></div>
              <select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option>{categories.map(c=><option key={c[0]}>{c[0]}</option>)}</select></div>
            </div>
            <div className="productGrid">{filteredProducts.map(p=><article className="productCard" key={p[0]}><div className="productImg"><img src={p[3]} alt={p[0]}/><span>{p[4]}</span></div><div className="productInfo"><small>{p[1]}</small><h3>{p[0]}</h3><p>{p[2]}</p><button onClick={()=>enquire(p[0])}>Get Price on WhatsApp <ArrowRight size={15}/></button></div></article>)}</div>
            {filteredProducts.length===0&&<div className="empty">No matching products yet. Try another search or category.</div>}
          </div>
        </div>
      </section>

      <section id="custom" className="custom">
        <div className="customImage"></div><div className="customOverlay"></div>
        <div className="container customContent"><div className="eyebrow">CUSTOM FURNITURE</div><h2>Have a design<br/><em>in mind?</em></h2><p>We manufacture furniture according to your size, design, colour and material requirements.</p>
        <div className="steps">{[["01","Share your design"],["02","Discuss measurements"],["03","We manufacture"],["04","Delivery & installation"]].map(s=><div key={s[0]}><b>{s[0]}</b><span>{s[1]}</span></div>)}</div>
        <button className="btn light" onClick={()=>go("contact")}>Send Your Requirement <ArrowRight size={18}/></button></div>
      </section>

      <section id="cnc" className="section cncSec"><div className="container twoCol cncGrid"><div className="sectionText"><div className="eyebrow dark">CNC DESIGN & MANUFACTURING</div><h2>Precision in every<br/><em>detail.</em></h2><p>Bring walls, doors, panels and furniture fronts to life with precision CNC 2D and 3D work.</p><div className="cncList">{["CNC 2D Designs","CNC 3D Designs","Decorative Panels","Custom Carvings","Precision Cutting"].map(x=><span key={x}><Check size={15}/>{x}</span>)}</div><button className="btn darkBtn" onClick={()=>go("gallery")}>View CNC Gallery <ArrowRight size={18}/></button></div><div className="cncVisual"><img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=90" alt="Decorative furniture design"/><div className="cncBadge"><span>2D / 3D</span><small>Precision CNC</small></div></div></div></section>

      <section className="why"><div className="container"><div className="centerHead"><div className="eyebrow dark">WHY JD</div><h2>Built on quality.<br/><em>Chosen for trust.</em></h2></div><div className="whyGrid">{[["Premium Quality","Thoughtful materials and construction for everyday use."],["Custom Sizes","Furniture made around your room, measurements and needs."],["Modern Designs","Clean, practical designs with a premium showroom feel."],["CNC Precision","Accurate cutting and detailed decorative work."],["Strong Construction","Built with stability, function and longevity in mind."],["Professional Finishing","Careful finishing for a polished, refined result."],["Competitive Pricing","A balance of quality, customization and value."],["Customer Satisfaction","Clear communication from idea to installation."]].map(([a,b])=><div key={a}><Sparkles size={20}/><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>

      <section id="gallery" className="section gallerySec"><div className="container"><div className="sectionHead"><div><div className="eyebrow dark">PROJECT GALLERY</div><h2>See the craft <em>come alive.</em></h2></div><p>A visual look at furniture, finishes and custom work. Replace these images with your own project photographs.</p></div><div className="filterPills">{["All","Beds","Sofas","Tables","CNC","Custom Work"].map(f=><button className={galleryFilter===f?"active":""} key={f} onClick={()=>setGalleryFilter(f)}>{f}</button>)}</div><div className="galleryGrid">{filteredGallery.map(g=><button className="galleryItem" key={g[0]} onClick={()=>setModal(g)}><img src={g[1]} alt={g[0]}/><span><small>{g[2]}</small><b>{g[0]}</b></span></button>)}</div></div></section>

      <section className="reviews"><div className="container reviewInner"><div><div className="eyebrow dark">CUSTOMER REVIEWS</div><h2>Share your<br/><em>experience.</em></h2><p>Submit your review directly on the website. New reviews are kept pending until they are approved.</p></div><form className="reviewForm" onSubmit={submitReview}><h3>Write a review</h3><input required placeholder="Your name" value={reviewName} onChange={e=>setReviewName(e.target.value)}/><div className="ratingRow"><span>Rating</span>{[1,2,3,4,5].map(n=><button type="button" key={n} className={n<=reviewRating?"ratingActive":""} onClick={()=>setReviewRating(n)}><Star/></button>)}</div><textarea required rows="5" placeholder="Write your review" value={reviewText} onChange={e=>setReviewText(e.target.value)}></textarea><button className="btn darkBtn" type="submit">{reviewSent?<><Check size={18}/> Review submitted</>:<>Submit Review <Send size={17}/></>}</button><small className="formNote">Thank you. Your review has been submitted for approval.</small></form></div></section>

      <section id="contact" className="section contactSec"><div className="container contactGrid"><div><div className="eyebrow dark">LET'S BUILD SOMETHING</div><h2>Start your furniture<br/><em>project today.</em></h2><p>Tell us what you need. Share a design, dimensions or simply an idea — we'll take it from there.</p><div className="contactCards"><a href={`tel:+91${PHONE}`}><Phone/><span><small>Call us</small><b>+91 80056 04653</b></span></a><a href={WHATSAPP} target="_blank"><MessageCircle/><span><small>WhatsApp</small><b>Chat with JD Furniture</b></span></a><a href={MAPS} target="_blank"><MapPin/><span><small>Visit us</small><b>{CITY}</b></span></a><a href={INSTAGRAM} target="_blank"><Instagram/><span><small>Instagram</small><b>@jdfurnitureindustries</b></span></a></div></div>
        <form className="enquiry" onSubmit={submit}><h3>Send an enquiry</h3><p>We'll get back to you about your requirement.</p><div className="formRow"><input required name="name" placeholder="Your name"/><input required name="phone" type="tel" placeholder="Phone number"/></div><input name="city" placeholder="City"/><select name="requirement"><option>Furniture requirement</option>{categories.map(c=><option key={c[0]}>{c[0]}</option>)}</select><textarea name="message" rows="5" placeholder="Tell us about your design, size, material or budget"></textarea><label className="upload"><Upload size={17}/><span>Upload design / reference image <small>Optional</small></span><input type="file" accept="image/*"/></label><button className="btn darkBtn" type="submit">{sent?<><Check size={18}/> Enquiry noted</>:<>Submit Enquiry <Send size={17}/></>}</button><small className="formNote">Submit opens WhatsApp with your enquiry details.</small></form></div></section>
    </main>

    <footer className="footer"><div className="container footerGrid"><div><div className="footerBrand"><span className="brandMark">JD</span><span><b>JD</b> Furniture Industry<small>CRAFTED FOR YOUR SPACE</small></span></div><p>Premium furniture manufacturing, custom furniture and CNC design work in Sri Ganganagar.</p><div className="socials"><a href={INSTAGRAM} target="_blank"><Instagram/></a><a href={WHATSAPP} target="_blank"><MessageCircle/></a><a href={MAPS} target="_blank"><MapPin/></a></div></div><div><h4>Explore</h4><button onClick={()=>go("about")}>About Us</button><button onClick={()=>go("products")}>Products</button><button onClick={()=>go("custom")}>Custom Furniture</button><button onClick={()=>go("cnc")}>CNC Work</button></div><div><h4>Categories</h4>{["Beds","Sofas","Dining Tables","Wardrobes"].map(x=><button key={x} onClick={()=>{setCategory(x);go("featured")}}>{x}</button>)}</div><div><h4>Contact</h4><a href={`tel:+91${PHONE}`}>+91 80056 04653</a><a href={MAPS} target="_blank">{CITY}</a><a href={INSTAGRAM} target="_blank">@jdfurnitureindustries</a></div></div><div className="container copyright"><span>© 2026 JD Furniture Industry. All Rights Reserved.</span><span>Furniture Crafted for Your Space.</span></div></footer>

    <div className="floating"><a href={`tel:+91${PHONE}`} aria-label="Call"><Phone size={20}/></a><a href={WHATSAPP} target="_blank" aria-label="WhatsApp"><MessageCircle size={21}/></a></div>

    {modal&&<div className="modal" onClick={()=>setModal(null)}><button onClick={()=>setModal(null)}><X/></button><img src={modal[1]} alt={modal[0]}/><div><small>{modal[2]}</small><h3>{modal[0]}</h3></div></div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);

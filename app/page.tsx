import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
// import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


export default function ResumeWebsite(){
const projects = [
  {
    name: "Customer Churn Prediction",
    desc: "ML pipeline predicting churn with FastAPI deployment.",
    link: "https://github.com/Tusharr1212/CustChurnPredictSys"
  },
  {
    name: "Blockchain based HealthInsurance system",
    desc: "A system for secure claim of health insurance along with money transfer using crypto currency",
    link: "https://github.com/Tusharr1212/BlockChainHealthInsuranceSystem"
  },
  {
    name: "AI Healthcare Chatbot",
    desc: "NLP assistant for healthcare queries.",
    link: "https://github.com/Tusharr1212/AI-and-Ml-based-healthcare-chatbot"
  }
];
const skills=['C++','Python','SQL','Machine Learning','Next.js','React','FastAPI','Pandas','Git','Docker'];
return (
<div className='min-h-screen bg-white text-zinc-900 font-sans'>
<header className='sticky top-0 z-10 border-b bg-white/80 backdrop-blur'>
<div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
<h1 className='font-semibold tracking-tight'>Tushar Purohit</h1>
<nav className='hidden md:flex gap-6 text-sm text-zinc-600'>
<a href='#about'>About</a><a href='#skills'>Skills</a><a href='#projects'>Projects</a><a href='#contact'>Contact</a>
</nav>
</div>
</header>
<section className='max-w-6xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-10 items-center'>
<div>
{/* <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>Open to Opportunities</p> */}
<h2 className='mt-4 text-5xl md:text-6xl font-semibold leading-tight'>MS CS Student building data-driven products.</h2>
<p className='mt-6 text-zinc-600 text-lg max-w-xl'>Based in Dresden. Focused on data science, machine learning, and modern full-stack development with clean user experiences.</p>
<div className='mt-8 flex gap-4'>
<a
  href="/Tushar_Website_resume.pdf"
  download
  className="inline-flex items-center px-5 py-2 rounded-2xl border border-zinc-300 text-sm hover:bg-zinc-100 transition"
>
  Download Resume
</a>
<details className="mt-2">
  <summary className="cursor-pointer inline-flex items-center px-5 py-2 rounded-2xl border border-zinc-300 text-sm hover:bg-zinc-100 transition">
    Contact
  </summary>

  <div className="mt-3 text-sm text-zinc-700 space-y-1 pl-2">
    <p>📧 tusharpurohit2001@gmail.com</p>
  </div>
</details>
</div>
</div>
<div className="rounded-3xl border border-zinc-200 shadow-sm p-8">
  <p className="text-sm text-zinc-500">Currently</p>
  <ul className="mt-4 space-y-4 text-sm text-zinc-700">
    <li>Studying MS Computer Science at TU Dresden</li>
    <li>Building portfolio projects in Data Science and SDE</li>
    <li>Seeking internships / working student roles</li>
  </ul>
</div>
</section>
<section id='about' className='max-w-6xl mx-auto px-6 py-16 border-t'>
<h3 className='text-2xl font-semibold'>About</h3>
 <div className="mt-6 max-w-3xl text-zinc-600 leading-7 space-y-4">
    <p>
      I am a Master’s student in Computer Science at TU Dresden with a strong focus on
      <span className="text-zinc-900 font-medium"> Data Science</span> and
      <span className="text-zinc-900 font-medium"> Software Development</span>.
    </p>

    <p>
      On the data science side, I enjoy working with machine learning models, data pipelines,
      and turning raw datasets into meaningful insights using Python, Pandas, and ML frameworks.
    </p>

    <p>
      On the software development side, I build scalable applications and backend systems using
      <span className="text-zinc-900 font-medium"> C++</span>, Next.js, and FastAPI, with a focus on performance,
      clean architecture, and real-world usability.
    </p>

    <p>
      My goal is to bridge the gap between data and product — building intelligent systems that
      are not only accurate, but also useful, scalable, and production-ready.
    </p>
  </div></section>
<section id='skills' className='max-w-6xl mx-auto px-6 py-16 border-t'>
<h3 className='text-2xl font-semibold'>Skills</h3>
<div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-4'>
{skills.map(s=><div key={s} className='rounded-2xl border p-4 text-sm'>{s}</div>)}
</div>
</section>
<section id='projects' className='max-w-6xl mx-auto px-6 py-16 border-t'>
<h3 className='text-2xl font-semibold'>Selected Projects</h3>
<div className='mt-6 grid md:grid-cols-3 gap-6'>
{projects.map((p) => (
  <a
    key={p.name}
    href={p.link}
    target="_blank"
    className="block rounded-3xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition"
  >
    <h4 className="font-medium">{p.name}</h4>
    <p className="mt-3 text-sm text-zinc-600">{p.desc}</p>

    <div className="mt-4 text-sm text-zinc-800">
      View Project ↗
    </div>
  </a>
))}
</div>
</section>
<section id='contact' className='max-w-6xl mx-auto px-6 py-16 border-t'>
<h3 className='text-2xl font-semibold'>Contact</h3>
<div className='mt-6 flex flex-wrap gap-4'>
<details className="mt-2">
  <summary className="cursor-pointer inline-flex items-center px-5 py-2 rounded-2xl border border-zinc-300 text-sm hover:bg-zinc-100 transition">
    Email
  </summary>

  <div className="mt-3 text-sm text-zinc-700 pl-2">
    📧 tusharpurohit2001@gmail.com
  </div>
</details><a
  href="https://github.com/Tusharr1212"
  target="_blank"
  className="inline-flex items-center px-5 py-2 rounded-2xl border border-zinc-300 text-sm hover:bg-zinc-100 transition"
>
  GitHub
</a>
<a
  href="https://www.linkedin.com/in/tushar-purohit-55b33624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  target="_blank"
  className="inline-flex items-center px-5 py-2 rounded-2xl border border-zinc-300 text-sm hover:bg-zinc-100 transition"
>
  LinkedIn
</a>
</div>
</section>
<footer className='max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-500 border-t'>© 2026 Tushar Purohit</footer>
</div>
)}

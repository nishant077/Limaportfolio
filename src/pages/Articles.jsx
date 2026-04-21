
import { ChevronRight } from 'lucide-react';
import article1 from '../assets/articlesimages/Article1.jpg';
import article2 from '../assets/articlesimages/Article2.jpg';
import article3 from '../assets/articlesimages/Article3.webp';
import article4 from '../assets/articlesimages/Article4.jpg';
import article5 from '../assets/articlesimages/Article5.jpeg';
import article6 from '../assets/articlesimages/Article6.jpg';

const articlesData = [
  {
    id: 1,
    title: "She Fled Fear, And Found It Here",
    date: "2026",
    source: "THE METEOR",
    link: "https://wearethemeteor.com/she-fled-fear-and-found-it-here/",
    image: article1
  },
  {
    id: 2,
    title: "Life Is Still An Open Wound",
    date: "2024",
    source: "THE METEOR",
    link: "https://wearethemeteor.com/afghanistan-four-years-taliban-rule-life-is-still-an-open-wound/",
    image: article2
  },
  {
    id: 3,
    title: "Afghan Women’ Aren’t Who You Think They Are",
    date: "2022",
    source: "FOREIGN POLICY",
    link: "https://foreignpolicy.com/2022/08/14/afghan-women-vicitims-911-aid-agency-western-paternalism/",
    image: article3
  },
  {
    id: 4,
    title: "Running through the valley of death to give life a chance",
    date: "2021",
    source: "TRT WORLD",
    link: "https://www.trtworld.com/opinion/running-through-the-valley-of-death-to-give-life-a-chance-49803",
    image: article4
  },
  {
    id: 5,
    title: "The US can’t ‘celebrate democracy’ at home as it destroys it in Afghanistan",
    date: "2021",
    source: "TRT WORLD",
    link: "https://www.trtworld.com/perspectives/the-us-can-t-celebrate-democracy-at-home-as-it-destroys-it-in-afghanistan-49226",
    image: article5
  },
  {
    id: 6,
    title: "The US and Taliban are partners now: What about the Afghan women?",
    date: "2020",
    source: "NIAS",
    link: "http://conflictreader.org/view_ipri_articles.php?ArticleNo=5&url=Afghanistan&recordNo=60&fbclid=IwAR3710lT9eRoLnGDQOG17puHTx8SlpUV8uTr-OnmUf93AFF0tA6a-mBchhw",
    image: article6
  },
  {
    id: 7,
    title: "Is NATO the Right Organization for Security Sector Reform in Conflict and Post-Conflict Environments?",
    date: "2020",
    source: "DROPS",
    link: "https://dropsafghanistan.org/wp-content/uploads/2020/12/E-4.pdf",
    image: article1
  },
  {
    id: 8,
    title: "Afghan Women Penal System",
    date: "2020",
    source: "BAAG",
    link: "https://www.baag.org.uk/sites/default/files/resources/attachments/The-Afghan-Women-Penal-System_PAA-Research-Report.pdf",
    image: article2
  },
  {
    id: 9,
    title: "Yet Another Lost Generation in Afghanistan",
    date: "2020",
    source: "MEDIUM",
    link: "https://medium.com/@limaahmad_25416/yet-another-lost-generation-in-afghanistan-8adfd8b3ca16",
    image: article3
  }
];

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-14/9 sm:aspect-auto sm:h-[420px] overflow-hidden rounded-md shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl no-underline bg-black"
    >
      {/* Background Image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-[1.2s] group-hover:scale-110 opacity-80 group-hover:opacity-60"
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="font-sans font-bold tracking-[.2em] text-[10px] md:text-xs uppercase"
            style={{ color: 'var(--kandahar-sun)' }}
          >
            {article.source}
          </span>
          <span className="text-white/30">•</span>
          <span className="font-sans font-semibold text-[10px] md:text-xs text-white/60 tracking-wider">
            {article.date}
          </span>
        </div>

        <h3 className="font-serif italic font-medium text-xl md:text-2xl leading-[1.1] mb-10 max-w-[90%] transition-colors duration-500 group-hover:text-[#FABD32]">
          {article.title}
        </h3>

        <div
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 text-xs md:text-sm font-sans font-bold tracking-wide transition-all duration-300 hover:scale-105 group-hover:text-[#FABD32]"
          style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          Read Article
          <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const Articles = () => {
  return (
    <div className="min-h-screen py-32 bg-(--archive-ivory)">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-24 transition-opacity duration-1000 animate-fade-in">
          <h1
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
            style={{ color: '#4A314A' }} // Slightly darker feminist-wisdom
          >
            Articles & Publications
          </h1>
          <p
            className="font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-70"
            style={{ color: 'var(--near-black)' }}
          >
            Essays, research, and opinion pieces documenting conflict and resilience across global perspectives.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {articlesData.map((article, index) => (
            <div
              key={article.id}
              className="animate-fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
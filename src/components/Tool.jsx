// ============================================================
// SAMPLE DATA — edit this array to add/remove/update tools
// ============================================================
import SASLogo from '../assets/SASLogo.svg'
import Top20Logo from '../assets/Top20Logo.svg'
import FantasyTeamLogo from '../assets/FantasyTeamLogo.svg'
import GithubLogo from '../assets/GithubLogo.svg'
import TwitterLogo from '../assets/TwitterLogo.svg'
import Placeholder from '../assets/Placeholder.svg'

const TOOLS = [
    {
        id: 1,
        title: "Swiss Auto Simulator",
        description: "Simulates the results of the 16 seed Swiss tournament format (Buchholz system) ",
        image: SASLogo,
        href: "https://elijahlflowers.github.io/Swiss-Auto-Simulator/",
    },
    {   
        id: 2,
        title: "Top 20 Calculator",
        description: "Calculates the best performing players of the year",
        image: Top20Logo,
        href: "https://elijahlflowers.github.io/top-20-calculator/",
    },
    {   
        id: 3,
        title: "HLTV Fantasy Team Calculator",
        description: "Finds the best possible teams that can be created based on user input",
        image: FantasyTeamLogo,
        href: "https://elijahlflowers.github.io/CS2FantasyTeamCalculator/",
    },
    // {   
    //     id: 4,
    //     title: "?",
    //     description: "Potenitally more to come",
    //     image: Placeholder,
    //     href: "",
    // },
];

const SOCIAL = [
    {
        id: 1,
        title: "GitHub",
        description: "",
        image: GithubLogo,
        href: "https://github.com/elijahlflowers",
    },
    {
        id: 2,
        title: "X/Twitter",
        description: "",
        image: TwitterLogo,
        href: "https://x.com/x__blue_",
    },
    
];

// ============================================================
// Tool — single card
// ============================================================
function Tool({ tool }) {
  return (
    <a
      href={tool.href}
      className="tool-card"
      // Remove the line below if you want same-tab navigation
      target="_blank"
      rel="noreferrer"
    >
      {/* Thumbnail */}
      <div className="tool-card__image-wrap">
        <img
          src={tool.image}
          alt={tool.title}
          className="tool-card__image"
        />
      </div>

      {/* Text */}
      <div className="tool-card__body">
        <h3 className="tool-card__title">{tool.title}</h3>
        <p className="tool-card__desc">{tool.description}</p>
      </div>

      {/* Arrow hint */}
      {/* <span className="tool-card__arrow" aria-hidden="true">→</span> */}
    </a>
  );
}

// ============================================================
// ToolList — renders a labeled section of cards
// ============================================================
function ToolList({ title = "Tools", tools, columns = 3}) {
  return (
    <section className={'tool-list'}>
      <h2 className="tool-list__heading">{title}</h2>
      <div className="tool-list__grid"
           style={{gridTemplateColumns: `repeat(${columns}, 180px)`}}
       >
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// ToolContainer — top-level wrapper; pass all tool groups here
// ============================================================
function ToolContainer() {
  return (
    <div className="tool-container">
        <ToolList title="Tools" tools={TOOLS} columns={3} />
        <ToolList title="Socials" tools={SOCIAL} columns={2} />
    </div>
  );
}

export { TOOLS, SOCIAL, Tool, ToolList, ToolContainer };
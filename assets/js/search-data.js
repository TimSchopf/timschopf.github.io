// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Scientific publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-nlp-kg-a-system-for-exploratory-search-of-scientific-literature-in-natural-language-processing-has-been-accepted-to-acl-2024-see-you-in-bangkok",
          title: 'Our paper NLP-KG: A System for Exploratory Search of Scientific Literature in Natural...',
          description: "",
          section: "News",},{id: "news-i-joined-the-research-group-of-prof-michael-färber-at-scads-ai-amp-amp-tu-dresden-as-a-postdoctoral-researcher",
          title: 'I joined the research group of Prof. Michael Färber at ScaDS.AI &amp;amp;amp; TU...',
          description: "",
          section: "News",},{id: "news-we-won-1st-place-in-the-scihal-2025-shared-task-on-hallucination-detection-for-scientific-content-at-acl-check-out-our-paper-to-learn-more-about-our-winning-approach-see-you-in-vienna",
          title: '🏆 We won 1st place in the SciHal 2025 Shared Task on Hallucination...',
          description: "",
          section: "News",},{id: "projects-createdata4ai",
          title: 'CreateData4AI',
          description: "Leveraging Domain Knowledge and Context Rules to Transform Large-Scale Unstructured Text Corpora into Structured and Annotated Datasets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cd4ai/";
            },},{id: "projects-hackatum",
          title: 'hackaTUM',
          description: "The official annual hackathon of the Technical University of Munich",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hackaTUM/";
            },},{id: "projects-knowledge4retail",
          title: 'Knowledge4Retail',
          description: "Ecosystem for a Knowledge-Based Platform supporting In-Store Logistics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/k4r/";
            },},{id: "projects-nlp-kg",
          title: 'NLP-KG',
          description: "Natural Language Processing Knowledge Graph",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nlp-kg/";
            },},{id: "projects-tsaas",
          title: 'TSaaS',
          description: "Technology Scouting as a Service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tsaas/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%6D.%73%63%68%6F%70%66@%74-%6F%6E%6C%69%6E%65.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TImSchopf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tim-schopf", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@tim.schopf", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3849-0394", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-9pQaLQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

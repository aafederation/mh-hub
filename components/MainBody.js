import { LandingCategory } from "./LandingCategory";
import { ResourceCard } from "./ResourceCard";

const resources = [
  {
    headMatter: {
      label: "Resources for Clients",
      description: "Find worksheets and exercises for your clients to use.",
      icon: "/img/icon/loving-hands.svg",
      button: {
        label: "See resources",
        link: "/r-for-client",
      },
    },
    resources: {
      title: "Client resources",
      items: [
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
      ],
    },
  },
  {
    headMatter: {
      label: "Resources for Providers",
      description:
        "Discover different strategies and techniques to support your clients.",
      icon: "/img/icon/working.svg",
      button: {
        label: "See resources",
        link: "/r-for-providers",
      },
    },
    resources: {
      title: "Strategies to talk to my client",
      items: [
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
      ],
    },
  },
  {
    headMatter: {
      label: "Research and policy",
      description:
        "Learn more about New York’s Asian community through our research articles.",
      icon: "/img/icon/research-paper.svg",
      button: {
        label: "See resources",
        link: "/r-and-p",
      },
    },
    resources: {
      title: "Learn about New York's Asian community",
      items: [
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
        {
          type: "resources",
          date: "may 16, 2024",
          title: "Mental Health Directory",
          tags: ["Resources"],
          summary:
            "description a volutpat vulputate sem mauris consectetur erat at tellus.",
        },
      ],
    },
  },
];
export const MainBody = () => {
  return (
    <>
      <div className="mhd-tiles">
        {resources.map((resource, i) => (
          <ResourceCard resource={resource.headMatter} key={i} />
        ))}
      </div>

      {resources.map((resource, i) => (
        <LandingCategory categoryDetails={resource.resources} key={i} />
      ))}
    </>
  );
};

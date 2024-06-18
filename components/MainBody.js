import { LandingCategory } from "./LandingCategory";
import { ResourceCard } from "./ResourceCard";
import { tinaField } from "tinacms/dist/react";

const resources = [
  {
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
export const MainBody = ({ homeData }) => {
  return (
    <>
      <div className="mhd-tiles">
        {homeData.resources.map((resource, i) => (
          <ResourceCard resource={resource} key={i} />
        ))}
      </div>

      {resources.map((resource, i) => (
        <LandingCategory categoryDetails={resource.resources} key={i} />
      ))}
    </>
  );
};

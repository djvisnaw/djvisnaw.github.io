export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const usesData = [
  {
    category: "Workspace",
    tools: [
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
    ],
  },
  {
    category: "Development tools",
    tools: [
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Whimsical", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      {
        name: "Figma",
        description: "Visually organized planning & prototyping tool I use for both UI decisions and internal tools.",
      },
    ],
  },
  {
    category: "Productivity",
    tools: [
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
    ],
  },
];

export default function Uses() {
  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Software I use, gadgets I love,
        <br /> and other things I recommend.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur
        adipiscing elit. Ut et massa mi Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="flex flex-col gap-16">
        {usesData.map((section) => (
          <div
            key={section.category}
            className="flex flex-row justify-start gap-8 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
          >
            <h2 className="m-0 text-lg font-bold min-w-32">{section.category}</h2>
            <div className="flex flex-col gap-8">
              {section.tools.map((tool, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

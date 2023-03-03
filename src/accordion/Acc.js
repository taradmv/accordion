import React, { useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleClick}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? "open" : "closed"}`}></span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children.map((child) => (
            <AccordionItem
              key={child.title}
              title={child.title}
              children={child.children}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function InfiniteAccordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          children={item.children}
        />
      ))}
    </div>
  );
}

const data = [
  {
    title: "Item 1",
    children: [
      {
        title: "Item 1.1",
        children: [
          {
            title: "Item 1.1.1",
            children: [],
          },
        ],
      },
      {
        title: "Item 1.2",
        children: [
          {
            title: "Item 1.2.1",
            children: [
              {
                title: "Item 1.2.1.1",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

function Acc() {
  return (
    <div>
      <InfiniteAccordion data={data} />
    </div>
  );
}

export default Acc;

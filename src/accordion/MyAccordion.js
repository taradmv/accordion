import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
function AccordionItem({ title, children }) {
  if (children.length === 0) {
    return (
      <Card>
        <Card.Body>
          <Card.Link href="#">{title}</Card.Link>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Accordion defaultActiveKey={0}>
        <Card>
          <Card.Header as={Card.Header} eventKey={title}>
            {title}
          </Card.Header>
          <Card.Body>
            <Accordion.Collapse eventKey={title}>
              <Accordion>
                {children.map((child) => (
                  <AccordionItem
                    key={child.title}
                    title={child.title}
                    children={child.children}
                  />
                ))}
              </Accordion>
            </Accordion.Collapse>
          </Card.Body>
        </Card>
      </Accordion>
    );
  }
}

function InfiniteAccordion({ data }) {
  return (
    <Accordion>
      {data.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          children={item.children}
        />
      ))}
    </Accordion>
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

function MyAccordion() {
  return (
    <div>
      <InfiniteAccordion data={data} />
    </div>
  );
}

export default MyAccordion;

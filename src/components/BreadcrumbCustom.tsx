import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbItemType {
  link: string | null;
  placeholder: string;
}

interface BreadcrumbCustomProps {
  items: BreadcrumbItemType[];
}

function BreadcrumbCustom({ items }: BreadcrumbCustomProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items &&
          items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.placeholder}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.link || "#"}>
                      {item.placeholder}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}{" "}
              </React.Fragment>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbCustom;

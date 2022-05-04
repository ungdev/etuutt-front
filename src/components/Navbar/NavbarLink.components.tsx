/* eslint-disable react/jsx-key */
import React, { FunctionComponent } from 'react';

interface ItemProps {
  name: string;
  link: string | undefined;
  icon: string;
  subItems: SubItemsProps[] | string;
}
interface SubItemsProps {
  subItemName: string;
  subItemLink: string;
}
export const NavbarLink: FunctionComponent<ItemProps> = ({ name, link, icon, subItems }) => {
  if (typeof subItems != 'string') {
    return (
      <li>
        <div className="icon-link">
          <a href="#">
            <i className={icon}></i>
            <span className="link_name">{name}</span>
          </a>
          <i className="bx bxs-chevron-down arrow"></i>
        </div>
        <ul className="sub-menu">
          <li>
            <a className="link_name" href={link}>
              {name}
            </a>
          </li>
          {subItems.map(({ subItemName, subItemLink }) => (
            <li>
              <a href={subItemLink}>{subItemName}</a>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <a href={link}>
          <i className={icon}></i>
          <span className="link_name">{name}</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href={link}>
              {name}
            </a>
          </li>
        </ul>
      </li>
    );
  }
};

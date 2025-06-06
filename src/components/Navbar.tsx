import { NavLink } from 'react-router-dom';
import NavSection from './NavSection';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="p-4  text-i-primary border-b border-i-border-color">
          Tailwind Testing
        </h1>
      </NavLink>

      <NavSection title="Colors" link="/colors">
        <li>Text color</li>
        <li>Background color</li>
        <li>Border color</li>
        <li>Button outline color</li>
      </NavSection>

      <NavSection title="Spacing" link="/spacing">
        <li>Margin</li>
        <li>Padding</li>
      </NavSection>

      <NavSection title="Typography" link="/typography">
        <li>Font Size</li>
        <li>Text Alignment</li>
        <li>Text Transform</li>
      </NavSection>

      <NavSection title="Width & Height" link="/sizing">
        <li>Width of the viewport</li>
        <li>100% of container</li>
        <li>Full screen height</li>
        <li>Arbitrary Width & Height</li>
      </NavSection>

      <NavSection title="Position, Display, Zindex" link="/position">
        <li>Position</li>
        <li>Display</li>
        <li>Z-index</li>
      </NavSection>

      <NavSection title="Drop Shadow" link="/dropshadow"></NavSection>

      <NavSection title="Border" link="/border">
        <li>Border size, color</li>
        <li>top, right, bottom, right</li>
        <li>x, y</li>
        <li>Radius</li>
      </NavSection>

      <NavSection title="Interactive" link="/interactive">
        <li>Button hover, focus, active</li>
        <li>Hover group</li>
        <li>Cursor</li>
        <li>Resize</li>
        <li>Select txt</li>
      </NavSection>

      <NavSection title="Break points" link="/breakpoints"></NavSection>

      <NavSection title="Flex" link="/flex">
        <li>col width, grow, shrink</li>
        <li>overlay on breakpoint</li>
      </NavSection>

      <NavSection title="Transform" link="/transform"></NavSection>

      <NavSection title="Dark theme" link="/darktheme"></NavSection>
    </div>
  )
};

export default Navbar;

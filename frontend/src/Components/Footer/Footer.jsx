import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

const Footer = () => {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://x.com/" target="_blank">
            <IconBrandX
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
              href="https://x.com/"
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://youtube.com/" target="_blank">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl" component="a" href="https://instagram.com/" target="_blank">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;

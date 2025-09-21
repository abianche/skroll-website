import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  badge?: 'New' | 'Coming soon';
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Write Branching Stories',
    Svg: require('@site/static/img/undraw_mind-map_i9bv.svg').default,
    description: (
      <>
        Create immersive, choice-driven narratives with a clean authoring experience inspired by
        Inky, focused on fast iteration and clarity.
      </>
    ),
  },
  {
    title: 'Cross-Platform Desktop',
    Svg: require('@site/static/img/undraw_dev-environment_n5by.svg').default,
    description: (
      <>
        Skroll runs on Windows, macOS, and Linux using Electron + React. Simple packaging, one
        codebase.
      </>
    ),
  },
  {
    title: 'Open-Source Core',
    Svg: require('@site/static/img/undraw_open-source_g069.svg').default,
    description: (
      <>
        Built in the open with a modular architecture. Extend the runtime, customize the editor, or
        contribute features.
      </>
    ),
  },
  // Example roadmap tiles (uncomment if you want them visible with badges)
  // {
  //   title: 'Ink Import',
  //   badge: 'Coming soon',
  //   Svg: require('@site/static/img/undraw_file-bundle.svg').default,
  //   description: (
  //     <>
  //       Import existing Ink stories into Skroll’s runtime schema to play or continue editing.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Syntax Highlighting',
  //   badge: 'Coming soon',
  //   Svg: require('@site/static/img/undraw_code-typing.svg').default,
  //   description: (
  //     <>
  //       First-class editor support (Tree-sitter) for Skroll’s DSL: highlighting, folding, and structure hints.
  //     </>
  //   ),
  // },
];

function Badge({ label }: { label: NonNullable<FeatureItem['badge']> }) {
  return <span className={styles.badge}>{label}</span>;
}

function Feature({ title, Svg, description, badge }: Readonly<FeatureItem>) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {title} {badge && <Badge label={badge} />}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Write Branching Stories',
    Svg: require('@site/static/img/undraw_mind-map_i9bv.svg').default,
    description: (
      <>
        Create immersive, choice-driven narratives with a clean authoring experience designed for
        interactive fiction.
      </>
    ),
  },
  {
    title: 'Play Anywhere',
    Svg: require('@site/static/img/undraw_progressive-app_9517.svg').default,
    description: (
      <>
        Skroll runs on Windows, macOS, Linux, iOS, and Android, powered by Tauri & React for a
        lightweight footprint.
      </>
    ),
  },
  {
    title: 'Open Source Core',
    Svg: require('@site/static/img/undraw_open-source_g069.svg').default,
    description: (
      <>
        Built in Rust for performance and reliability. The core engine is fully open source —
        extend, fork, or contribute.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: Readonly<FeatureItem>) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

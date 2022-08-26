import clsx from 'clsx';
import React from 'react';
import { FontAwesomeCardData, SvgCardData, SvgOrFonticon } from '../SvgOrFonticon';
import styles from './styles.module.css';

type CardData = {
  href: string;
  title: string;
  description: string;
  /**
   * Cards with "showLast:true" will be alphabetically sorted amongst themselves, AFTER all "showLast:false" cards.
   * Defaults to false.
   */
  showLast?: boolean;
};

export type OpenFeatureComponentCardData = CardData & (SvgCardData | FontAwesomeCardData);

/**
 * A card to be used for linking (externally or internally) to specific technologies (SDKs, hooks, providers)
 */
export class OpenFeatureComponentCard extends React.Component<OpenFeatureComponentCardData> {
  override render() {
    const props = this.props as CardData & Partial<SvgCardData & FontAwesomeCardData>;
    const external = props.href.startsWith('http');
    return (
      <a
        // if external, open in new tab
        target={external ? '_blank' : '_self'}
        href={props.href}
        style={{ position: 'relative' }}
        className={clsx('card padding--lg', styles.cardContainer)}
      >
        <div style={{ height: 0, position: 'absolute', right: 20, top: 20 }}>{external ? '🔗' : ''}</div>

        <SvgOrFonticon svg={ props.svg } iconDefinition={ props.iconDefinition }/>
        <h1 className={clsx('text--truncate', styles.cardTitle)}>{this.props.title}</h1>
        <h2 className={clsx(styles.cardDescription)}>{this.props.description}</h2>
      </a>
    );
  }
}

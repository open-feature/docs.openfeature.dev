import clsx from 'clsx';
import React from 'react';
import { SDKComponentCard, SDKComponentCardData } from '../SDKComponentCard/';

export class SDKComponentTable extends React.Component<{
  items: SDKComponentCardData[];
}> {
  override render() {
    return (
      <section className={clsx('row')}>
        {this.props.items.map((item) => {
          return (
            <article className="col col--5 margin-bottom--lg">
              <SDKComponentCard {...item} />
            </article>
          );
        })}
      </section>
    );
  }
}

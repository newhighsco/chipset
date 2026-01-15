import React from 'react'

import { Prose } from '..'

export default { component: Prose }

export const Source = {
  args: { children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const WithChildren = {
  args: {
    children: (
      <>
        <h1>Typography</h1>
        <p>
          Prose text generally appears on article pages or service pages. Any
          text that a User enters in a CMS will be styled this way.
        </p>
        <hr />
        <h1>Heading 1 as text</h1>
        <p>
          Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
          condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
          Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris,
          quis.
        </p>
        <p>
          Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
          posuere. Praesent id metus massa, ut.
        </p>
        <h2>Heading 2 as text</h2>
        <p>
          Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus
          ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed molestie augue sit amet leo consequat posuere.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
        </p>
        <h3>Heading 3 as text</h3>
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat.
        </p>
        <h4>Heading 4 as text</h4>
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat.
        </p>
        <h5>Heading 5 as text</h5>
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat.
        </p>
        <h6>Heading 6 as text</h6>
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat.
        </p>
        <hr />
        <h1>Heading 1 as text</h1>
        <h2>Heading 2 as text</h2>
        <h3>Heading 3 as text</h3>
        <h4>Heading 4 as text</h4>
        <h5>Heading 5 as text</h5>
        <h6>Heading 6 as text</h6>
        <hr />
        <h1>
          <a href="/">Heading 1 as a link</a>
        </h1>
        <h2>
          <a href="/">Heading 2 as a link</a>
        </h2>
        <h3>
          <a href="/">Heading 3 as a link</a>
        </h3>
        <h4>
          <a href="/">Heading 4 as a link</a>
        </h4>
        <h5>
          <a href="/">Heading 5 as a link</a>
        </h5>
        <h6>
          <a href="/">Heading 6 as a link</a>
        </h6>
        <hr />
        <ol>
          <li>Ordered list item 1</li>
          <li>
            Ordered list item 2
            <ol>
              <li>Nested ordered list item 1</li>
              <li>Nested ordered list item 2</li>
              <li>Nested ordered list item 3</li>
            </ol>
          </li>
          <li>Ordered list item 3</li>
          <li>
            Ordered list item 4. ut in nulla enim. phasellus molestie magna non
            est bibendum non venenatis nisl tempor. suspendisse dictum feugiat
            nisl ut dapibus. mauris iaculis porttitor posuere. praesent id metus
            massa, ut blandit odio. proin quis tortor orci. etiam at risus et
            justo dignissim congue. donec congue lacinia dui.
          </li>
          <li>Ordered list item 5</li>
        </ol>
        <ul>
          <li>Unordered list item 1</li>
          <li>
            Unordered list item 2
            <ul>
              <li>Nested unordered list item 1</li>
              <li>Nested unordered list item 2</li>
              <li>Nested unordered list item 3</li>
            </ul>
          </li>
          <li>Unordered list item 3</li>
          <li>
            Unordered list item 4. Ut in nulla enim. Phasellus molestie magna
            non est bibendum non venenatis nisl tempor. Suspendisse dictum
            feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent
            id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
            risus et justo dignissim congue. Donec congue lacinia dui.
          </li>
          <li>Unordered list item 5</li>
        </ul>
        <dl>
          <dt>Definition Title</dt>
          <dd>Definition Description</dd>
          <dt>Definition Title</dt>
          <dt>Definition Title</dt>
          <dd>Definition Description</dd>
          <dt>Definition Title</dt>
          <dd>Definition Description</dd>
          <dd>Definition Description</dd>
        </dl>
        <hr />
        <p>
          <a href="/">This is a text link</a>
        </p>
        <p>
          <strong>Strong is used to indicate strong importance</strong>
        </p>
        <p>
          <em>This text has added emphasis</em>
        </p>
        <p>
          The <b>b element</b> is stylistically different text from normal text,
          without any special importance
        </p>
        <p>
          The <i>i element</i> is text that is set off from the normal text
        </p>
        <p>
          <del>This text is deleted</del> and <ins>This text is inserted</ins>
        </p>
        <p>
          <s>This text has a strikethrough</s>
        </p>
        <p>
          Superscript
          <sup>®</sup>
        </p>
        <p>
          Subscript for things like H<sub>2</sub>O
        </p>
        <p>
          <small>This “small” text is for fine print, etc.</small>
        </p>
        <p>
          Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
        </p>
      </>
    )
  }
}

export const WithHTML = {
  args: {
    html: '<p><strong>This text</strong> may have been passed from <em>a CMS</em>.</p><p>Do not use for User-supplied content.</p>'
  }
}

const inlineStyles = {
  boxSizing: 'content-box',
  color: '#000fff',
  fontFamily: 'Impact',
  fontSize: '40px',
  fontStyle: 'italic',
  fontWeight: 'bold',
  lineHeight: '40px',
  margin: '40px',
  padding: '40px',
  textDecoration: 'underline'
}

export const WithInlineStyleOverrides = {
  args: {
    children: (
      <p style={inlineStyles}>
        This HTML has inline styles similar to the ones left in by copying text
        into WYSIWYG editors, but is wrapped in a Prose component. It should
        look like regular prose text.
      </p>
    )
  },
  decorators: [
    Story => (
      <>
        {Story()}
        <p style={inlineStyles}>
          This HTML has the same styles, but isn&pos;t wrapped in a Prose
          component.
        </p>
      </>
    )
  ]
}

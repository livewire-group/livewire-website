// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import CareerPreview from './cms-preview-templates/CareerPreview.jsx';
// Import main site styles as a string to inject into the CMS preview pane
import HomePreview from './cms-preview-templates/HomePreview.jsx';
import PostPreview from './cms-preview-templates/PostPreview.jsx';
import SectionsPreview from './cms-preview-templates/SectionsPreview.jsx';

// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import styles from '!css-loader!postcss-loader!../css/main.pcss';
// Import ProductsPreview from './cms-preview-templates/products';
// import ValuesPreview from './cms-preview-templates/values';
// import ContactPreview from './cms-preview-templates/contact';

CMS.registerPreviewStyle(styles.toString(), { raw: true });
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('news', PostPreview);
CMS.registerPreviewTemplate('careers', CareerPreview);
CMS.registerPreviewTemplate('solutions', SectionsPreview);
CMS.registerPreviewTemplate('gametech', SectionsPreview);
// CMS.registerPreviewTemplate('services', ProductsPreview);
// CMS.registerPreviewTemplate('about', ValuesPreview);
// CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.init();

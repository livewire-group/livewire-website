import React from 'react';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

// Import main site styles as a string to inject into the CMS preview pane
import styles from '!css-loader!postcss-loader!../css/main.pcss';

import HomePreview from './cms-preview-templates/HomePreview';
import PostPreview from './cms-preview-templates/PostPreview';
// import ProductsPreview from './cms-preview-templates/products';
// import ValuesPreview from './cms-preview-templates/values';
// import ContactPreview from './cms-preview-templates/contact';

CMS.registerPreviewStyle(styles.toString(), { raw: true });
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('news', PostPreview);
// CMS.registerPreviewTemplate('services', ProductsPreview);
// CMS.registerPreviewTemplate('about', ValuesPreview);
// CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.init();

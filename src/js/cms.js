import React from 'react';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

// Import main site styles as a string to inject into the CMS preview pane
import styles from '!css-loader!postcss-loader!../css/main.pcss';

import HomePreview from './cms-preview-templates/home';
import PostPreview from './cms-preview-templates/post';
import ProductsPreview from './cms-preview-templates/products';
import ValuesPreview from './cms-preview-templates/values';
import ContactPreview from './cms-preview-templates/contact';

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('post', PostPreview);
CMS.registerPreviewTemplate('products', ProductsPreview);
CMS.registerPreviewTemplate('values', ValuesPreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.init();

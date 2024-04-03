import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'address';
    icon: 'earth';
  };
  attributes: {
    country: Attribute.String;
    state: Attribute.String;
    district: Attribute.String;
    pinCode: Attribute.String;
  };
}

export interface QualificationEducationalQualification
  extends Schema.Component {
  collectionName: 'components_qualification_educational_qualifications';
  info: {
    displayName: 'Educational Qualification';
    icon: 'book';
  };
  attributes: {
    course: Attribute.String;
    university: Attribute.String;
    marks: Attribute.String;
    message: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'qualification.educational-qualification': QualificationEducationalQualification;
    }
  }
}

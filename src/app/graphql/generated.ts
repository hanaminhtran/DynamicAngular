import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** String or Number or  Boolean custom scalar type */
  AnyType: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** MongoDB ObjectId custom scalar type */
  ObjectId: { input: any; output: any; }
};

export type AddressTab = {
  __typename?: 'AddressTab';
  address_1?: Maybe<Scalars['Float']['output']>;
  address_2?: Maybe<Scalars['String']['output']>;
  address_3?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['Float']['output']>;
  default_contact?: Maybe<Scalars['String']['output']>;
  default_contact_id?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_id?: Maybe<Scalars['String']['output']>;
  province_state?: Maybe<Scalars['String']['output']>;
  province_state_id?: Maybe<Scalars['String']['output']>;
  town_city?: Maybe<Scalars['String']['output']>;
  zip_postcode?: Maybe<Scalars['String']['output']>;
};

/** apis */
export type Apis = {
  __typename?: 'Apis';
  _id: Scalars['ID']['output'];
  api_key?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['ID']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  date_modified?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  modified_by?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
};

export type ApisCreateInput = {
  api_key?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ObjectId']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
};

/** authentication response */
export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresAt: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
  refreshTokenExpiresAt: Scalars['Float']['output'];
};

/** cloudTag */
export type CloudTag = {
  __typename?: 'CloudTag';
  _id: Scalars['ID']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['Float']['output']>;
  custom_order_no?: Maybe<Scalars['Float']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiry_date?: Maybe<Scalars['String']['output']>;
  folder_id?: Maybe<Scalars['String']['output']>;
  folder_parent_id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  is_menu?: Maybe<Scalars['Float']['output']>;
  is_parent?: Maybe<Scalars['Float']['output']>;
  is_recycle?: Maybe<Scalars['Float']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  no?: Maybe<Scalars['Float']['output']>;
  not_show_by_com?: Maybe<Scalars['String']['output']>;
  order_no?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_fr?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CloudTagCreateInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  order_no?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_fr?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CloudTagUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  no?: InputMaybe<Scalars['Float']['input']>;
  order_no?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_fr?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** tb_company */
export type Company = {
  __typename?: 'Company';
  AccountNo?: Maybe<Scalars['Float']['output']>;
  RecordType?: Maybe<Scalars['String']['output']>;
  _id: Scalars['ID']['output'];
  address_default_key?: Maybe<Scalars['Float']['output']>;
  addresses_default_key?: Maybe<Scalars['Float']['output']>;
  business_type?: Maybe<Scalars['String']['output']>;
  business_type_id?: Maybe<Scalars['String']['output']>;
  company_name: Scalars['String']['output'];
  company_no_wt?: Maybe<Scalars['Float']['output']>;
  contact_default_id?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  date_modified?: Maybe<Scalars['Float']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_so_completed?: Maybe<Scalars['Float']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  inactive?: Maybe<Scalars['Float']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  industry_id?: Maybe<Scalars['String']['output']>;
  is_customer?: Maybe<Scalars['Float']['output']>;
  is_shipper?: Maybe<Scalars['Float']['output']>;
  is_supplier?: Maybe<Scalars['Float']['output']>;
  modified_by?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  net_discount?: Maybe<Scalars['Float']['output']>;
  no?: Maybe<Scalars['Float']['output']>;
  our_csr?: Maybe<Scalars['String']['output']>;
  our_csr_id?: Maybe<Scalars['String']['output']>;
  our_rep?: Maybe<Scalars['String']['output']>;
  our_rep_id?: Maybe<Scalars['String']['output']>;
  our_responsible?: Maybe<Scalars['String']['output']>;
  our_responsible_id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  sell_category?: Maybe<Scalars['String']['output']>;
  sell_category_id?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  size_id?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  tracking_url?: Maybe<Scalars['String']['output']>;
  type_name?: Maybe<Scalars['String']['output']>;
  type_name_id?: Maybe<Scalars['String']['output']>;
  web?: Maybe<Scalars['String']['output']>;
  web_discount?: Maybe<Scalars['Float']['output']>;
};

export enum ComparisonOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  InArray = 'IN_ARRAY',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotInArray = 'NOT_IN_ARRAY'
}

export type Contacts = {
  __typename?: 'Contacts';
  _id: Scalars['String']['output'];
  company_name?: Maybe<Scalars['String']['output']>;
  direct_dial?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** costCentre */
export type CostCentre = {
  __typename?: 'CostCentre';
  _id: Scalars['ID']['output'];
  code?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['Float']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  no?: Maybe<Scalars['Float']['output']>;
  order_no?: Maybe<Scalars['Float']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
};

export type CostCentreCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

export type CostCentreUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type DatasInput = {
  datas: Scalars['JSONObject']['input'];
};

export type MoreOptions = {
  __typename?: 'MoreOptions';
  dropdown_name?: Maybe<Scalars['String']['output']>;
  dropdown_value?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<OneOption>>;
  sort_order?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addApis: Apis;
  addCloudTag: CloudTag;
  addCompany: Company;
  addCostCentre: CostCentre;
  addProduct: Product;
  addProductDetail: ProductDetail;
  addProductImages: ProductImages;
  addSettingOption?: Maybe<Setting>;
  createProduct: Product;
  createSetting?: Maybe<Setting>;
  createUser: User;
  deleteApis: Scalars['Boolean']['output'];
  deleteCloudTag: Scalars['Boolean']['output'];
  deleteCompany: Scalars['Boolean']['output'];
  deleteCostCentre: Scalars['Boolean']['output'];
  deleteManyApis: Scalars['Boolean']['output'];
  deleteManyCloudTag: Scalars['Boolean']['output'];
  deleteManyCompany: Scalars['Boolean']['output'];
  deleteManyCostCentre: Scalars['Boolean']['output'];
  deleteManyProduct: Scalars['Boolean']['output'];
  deleteManyProductDetail: Scalars['Boolean']['output'];
  deleteManyProductImages: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteProductDetail: Scalars['Boolean']['output'];
  deleteProductImages: Scalars['Boolean']['output'];
  getOptionProduct: Array<ProductOption>;
  login: AuthResponse;
  newApis: Apis;
  newCloudTag: CloudTag;
  newCostCentre: CostCentre;
  newProductDetail: ProductDetail;
  newProductImages: ProductImages;
  refreshToken: AuthResponse;
  removeApis: Scalars['Boolean']['output'];
  removeCloudTag: Scalars['Boolean']['output'];
  removeCompany: Scalars['Boolean']['output'];
  removeCostCentre: Scalars['Boolean']['output'];
  removeManyApis: Scalars['Boolean']['output'];
  removeManyCloudTag: Scalars['Boolean']['output'];
  removeManyCompany: Scalars['Boolean']['output'];
  removeManyCostCentre: Scalars['Boolean']['output'];
  removeManyProduct: Scalars['Boolean']['output'];
  removeManyProductDetail: Scalars['Boolean']['output'];
  removeManyProductImages: Scalars['Boolean']['output'];
  removeProduct: Scalars['Boolean']['output'];
  removeProductDetail: Scalars['Boolean']['output'];
  removeProductImages: Scalars['Boolean']['output'];
  removeSetting?: Maybe<Setting>;
  removeSettingOption?: Maybe<Setting>;
  searchApis: Array<Apis>;
  searchCloudTag: Array<CloudTag>;
  searchCompany: Array<Company>;
  searchCostCentre: Array<CostCentre>;
  searchOneApis: Apis;
  searchOneCloudTag: CloudTag;
  searchOneCompany: Company;
  searchOneCostCentre: CostCentre;
  searchOneProduct: Product;
  searchOneProductDetail: ProductDetail;
  searchOneProductImages: ProductImages;
  searchProduct: Array<Product>;
  searchProductDetail: Array<ProductDetail>;
  searchProductImages: Array<ProductImages>;
  updateCloudTag: CloudTag;
  updateCostCentre: CostCentre;
  updateProduct: Product;
  updateProductDetail: ProductDetail;
  updateSetting?: Maybe<Setting>;
  updateUser: User;
};


export type MutationAddApisArgs = {
  datas: DatasInput;
};


export type MutationAddCloudTagArgs = {
  datas: DatasInput;
};


export type MutationAddCompanyArgs = {
  datas: DatasInput;
};


export type MutationAddCostCentreArgs = {
  datas: DatasInput;
};


export type MutationAddProductArgs = {
  datas: DatasInput;
};


export type MutationAddProductDetailArgs = {
  datas: DatasInput;
};


export type MutationAddProductImagesArgs = {
  datas: DatasInput;
};


export type MutationAddSettingOptionArgs = {
  input: SettingOptionCreateInput;
  where: SettingWhereInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type MutationCreateSettingArgs = {
  input: SettingCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteApisArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteCloudTagArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteCompanyArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteCostCentreArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteManyApisArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyCloudTagArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyCompanyArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyCostCentreArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyProductArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyProductDetailArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteManyProductImagesArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationDeleteProductArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteProductDetailArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteProductImagesArgs = {
  _id: Scalars['String']['input'];
};


export type MutationGetOptionProductArgs = {
  _id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: UserLoginInput;
};


export type MutationNewApisArgs = {
  newData: ApisCreateInput;
};


export type MutationNewCloudTagArgs = {
  newData: CloudTagCreateInput;
};


export type MutationNewCostCentreArgs = {
  newData: CostCentreCreateInput;
};


export type MutationNewProductDetailArgs = {
  newData: ProductDetailCreateInput;
};


export type MutationNewProductImagesArgs = {
  newData: ProductImagesCreateInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveApisArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveCloudTagArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveCompanyArgs = {
  _id: Scalars['String']['input'];
};


export type MutationRemoveCostCentreArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveManyApisArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyCloudTagArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyCompanyArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyCostCentreArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyProductArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyProductDetailArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveManyProductImagesArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type MutationRemoveProductArgs = {
  _id: Scalars['String']['input'];
};


export type MutationRemoveProductDetailArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveProductImagesArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveSettingArgs = {
  where: SettingWhereInput;
};


export type MutationRemoveSettingOptionArgs = {
  where: SettingOptionWhereInput;
};


export type MutationSearchApisArgs = {
  input: SearchInput;
};


export type MutationSearchCloudTagArgs = {
  input: SearchInput;
};


export type MutationSearchCompanyArgs = {
  input: SearchInput;
};


export type MutationSearchCostCentreArgs = {
  input: SearchInput;
};


export type MutationSearchOneApisArgs = {
  input: SearchInput;
};


export type MutationSearchOneCloudTagArgs = {
  input: SearchInput;
};


export type MutationSearchOneCompanyArgs = {
  input: SearchInput;
};


export type MutationSearchOneCostCentreArgs = {
  input: SearchInput;
};


export type MutationSearchOneProductArgs = {
  input: SearchInput;
};


export type MutationSearchOneProductDetailArgs = {
  input: SearchInput;
};


export type MutationSearchOneProductImagesArgs = {
  input: SearchInput;
};


export type MutationSearchProductArgs = {
  input: SearchInput;
};


export type MutationSearchProductDetailArgs = {
  input: SearchInput;
};


export type MutationSearchProductImagesArgs = {
  input: SearchInput;
};


export type MutationUpdateCloudTagArgs = {
  _id: Scalars['ID']['input'];
  input: CloudTagUpdateInput;
};


export type MutationUpdateCostCentreArgs = {
  _id: Scalars['ID']['input'];
  input: CostCentreUpdateInput;
};


export type MutationUpdateProductArgs = {
  _id: Scalars['ID']['input'];
  input: ProductUpdateInput;
};


export type MutationUpdateProductDetailArgs = {
  _id: Scalars['ID']['input'];
  input: ProductDetailUpdateInput;
};


export type MutationUpdateSettingArgs = {
  input: SettingUpdateInput;
  where: SettingWhereInput;
};


export type MutationUpdateUserArgs = {
  UserUpdateInput: UserUpdateInput;
  id: Scalars['String']['input'];
};

export type OneOption = {
  __typename?: 'OneOption';
  label?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** product */
export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  anvy_item?: Maybe<Scalars['Float']['output']>;
  ao_item?: Maybe<Scalars['Float']['output']>;
  approved?: Maybe<Scalars['Float']['output']>;
  arr_stock_qty?: Maybe<Scalars['Float']['output']>;
  assemply_item?: Maybe<Scalars['Float']['output']>;
  brands?: Maybe<Array<Scalars['Float']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['String']['output']>;
  check_stock_stracking?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  combination_calculation?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['ID']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  cost_price?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['ID']['output']>;
  date_created?: Maybe<Scalars['DateTime']['output']>;
  date_modified?: Maybe<Scalars['DateTime']['output']>;
  deleted: Scalars['Boolean']['output'];
  depth?: Maybe<Scalars['Float']['output']>;
  depth_unit?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  excel_file?: Maybe<Scalars['String']['output']>;
  group_product?: Maybe<Scalars['String']['output']>;
  group_type?: Maybe<Scalars['String']['output']>;
  gst_tax?: Maybe<Scalars['String']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  image_file?: Maybe<Scalars['String']['output']>;
  imgfile_not_required?: Maybe<Scalars['String']['output']>;
  in_stock?: Maybe<Scalars['String']['output']>;
  is_custom_size?: Maybe<Scalars['Float']['output']>;
  is_master_product: Scalars['Boolean']['output'];
  is_printer?: Maybe<Scalars['Float']['output']>;
  is_rfq?: Maybe<Scalars['Float']['output']>;
  is_special_product?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Array<Scalars['Float']['output']>>;
  language_tag?: Maybe<Array<Scalars['Float']['output']>>;
  languages?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['String']['output']>;
  listlangs?: Maybe<Scalars['String']['output']>;
  location_id?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Scalars['String']['output']>;
  madeup?: Maybe<Array<ProductMadeUp>>;
  margin?: Maybe<Scalars['Float']['output']>;
  markup?: Maybe<Scalars['Float']['output']>;
  material_tag?: Maybe<Array<Scalars['Float']['output']>>;
  mer?: Maybe<Array<Scalars['Float']['output']>>;
  modified_by?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<ProductOption>>;
  otherdetails?: Maybe<Scalars['String']['output']>;
  oum?: Maybe<Scalars['String']['output']>;
  oum_depend?: Maybe<Scalars['String']['output']>;
  paper_size?: Maybe<Scalars['String']['output']>;
  parent_product_code?: Maybe<Scalars['String']['output']>;
  parent_product_id?: Maybe<Scalars['ID']['output']>;
  parent_product_name?: Maybe<Scalars['String']['output']>;
  prefer_customer?: Maybe<Scalars['String']['output']>;
  prefer_customer_id?: Maybe<Scalars['ID']['output']>;
  price_breaks_type?: Maybe<Scalars['String']['output']>;
  price_note?: Maybe<Scalars['String']['output']>;
  pricebreaks?: Maybe<Array<ProductPriceBreaks>>;
  pricing_bleed?: Maybe<Scalars['String']['output']>;
  pricing_method?: Maybe<Scalars['String']['output']>;
  product_base?: Maybe<Scalars['String']['output']>;
  product_desciption?: Maybe<Scalars['String']['output']>;
  product_lang?: Maybe<Scalars['String']['output']>;
  product_note?: Maybe<Scalars['String']['output']>;
  product_type?: Maybe<Scalars['String']['output']>;
  production_step?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Scalars['Float']['output']>>;
  products_upload?: Maybe<Scalars['String']['output']>;
  profit?: Maybe<Scalars['String']['output']>;
  pst_tax?: Maybe<Scalars['String']['output']>;
  purchasing?: Maybe<Scalars['String']['output']>;
  qty_in_stock?: Maybe<Scalars['Float']['output']>;
  rediscount?: Maybe<Scalars['Float']['output']>;
  rediscount_unit?: Maybe<Scalars['String']['output']>;
  reference_number?: Maybe<Scalars['String']['output']>;
  replace_by?: Maybe<Scalars['ID']['output']>;
  saved_dir?: Maybe<Scalars['String']['output']>;
  sell_by?: Maybe<Scalars['String']['output']>;
  sell_price?: Maybe<Scalars['Float']['output']>;
  sell_price_intax?: Maybe<Scalars['Float']['output']>;
  sellprices?: Maybe<Array<ProductSellprices>>;
  shipping_cost?: Maybe<Scalars['Float']['output']>;
  shipping_size_unit?: Maybe<Scalars['String']['output']>;
  shipping_sizeh?: Maybe<Scalars['Float']['output']>;
  shipping_sizel?: Maybe<Scalars['Float']['output']>;
  shipping_sizew?: Maybe<Scalars['Float']['output']>;
  shipping_weight?: Maybe<Scalars['Float']['output']>;
  shipping_weight_unit?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  sizeh?: Maybe<Scalars['Float']['output']>;
  sizeh_unit?: Maybe<Scalars['String']['output']>;
  sizew?: Maybe<Scalars['Float']['output']>;
  sizew_unit?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  small_format?: Maybe<Scalars['String']['output']>;
  sold_by?: Maybe<Scalars['String']['output']>;
  special_order?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  stock_by?: Maybe<Scalars['String']['output']>;
  stock_code?: Maybe<Scalars['String']['output']>;
  stock_des_current?: Maybe<Scalars['String']['output']>;
  stocktakes?: Maybe<Scalars['String']['output']>;
  sum_amount?: Maybe<Scalars['Float']['output']>;
  sum_sub_total?: Maybe<Scalars['Float']['output']>;
  sum_tax?: Maybe<Scalars['Float']['output']>;
  supplier?: Maybe<Array<ProductSupplier>>;
  tag?: Maybe<Array<Scalars['String']['output']>>;
  tag_category?: Maybe<Scalars['String']['output']>;
  tag_group?: Maybe<Scalars['String']['output']>;
  tag_sales_rep?: Maybe<Scalars['String']['output']>;
  tag_tags?: Maybe<Scalars['String']['output']>;
  tech_notes?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  thickness?: Maybe<Scalars['Float']['output']>;
  thickness_unit?: Maybe<Scalars['String']['output']>;
  time_check_stock?: Maybe<Scalars['String']['output']>;
  under_over?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  update_price_by?: Maybe<Scalars['ID']['output']>;
  update_price_by_name?: Maybe<Scalars['String']['output']>;
  update_price_date?: Maybe<Scalars['DateTime']['output']>;
  upload_file_product?: Maybe<Scalars['Float']['output']>;
  web_enable: Scalars['Boolean']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  weight_size?: Maybe<Scalars['String']['output']>;
  weight_unit?: Maybe<Scalars['String']['output']>;
};

export type ProductCreateInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  anvy_item?: InputMaybe<Scalars['Float']['input']>;
  ao_item?: InputMaybe<Scalars['Float']['input']>;
  approved?: InputMaybe<Scalars['Float']['input']>;
  arr_stock_qty?: InputMaybe<Scalars['Float']['input']>;
  assemply_item?: InputMaybe<Scalars['Float']['input']>;
  brands?: InputMaybe<Array<Scalars['Float']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['String']['input']>;
  check_stock_stracking?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  combination_calculation?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  cost_price?: InputMaybe<Scalars['Float']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  date_created?: InputMaybe<Scalars['DateTime']['input']>;
  date_modified?: InputMaybe<Scalars['DateTime']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  depth_unit?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  excel_file?: InputMaybe<Scalars['String']['input']>;
  group_product?: InputMaybe<Scalars['String']['input']>;
  group_type?: InputMaybe<Scalars['String']['input']>;
  gst_tax?: InputMaybe<Scalars['String']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  image_file?: InputMaybe<Scalars['String']['input']>;
  imgfile_not_required?: InputMaybe<Scalars['String']['input']>;
  in_stock?: InputMaybe<Scalars['String']['input']>;
  is_custom_size?: InputMaybe<Scalars['Float']['input']>;
  is_master_product?: InputMaybe<Scalars['Boolean']['input']>;
  is_printer?: InputMaybe<Scalars['Float']['input']>;
  is_rfq?: InputMaybe<Scalars['Float']['input']>;
  is_special_product?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Array<Scalars['Float']['input']>>;
  language_tag?: InputMaybe<Array<Scalars['Float']['input']>>;
  languages?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  listlangs?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Scalars['String']['input']>;
  madeup?: InputMaybe<Array<ProductMadeUpInput>>;
  margin?: InputMaybe<Scalars['Float']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
  material_tag?: InputMaybe<Array<Scalars['Float']['input']>>;
  mer?: InputMaybe<Array<Scalars['Float']['input']>>;
  modified_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<ProductOptionInput>>;
  otherdetails?: InputMaybe<Scalars['String']['input']>;
  oum?: InputMaybe<Scalars['String']['input']>;
  oum_depend?: InputMaybe<Scalars['String']['input']>;
  paper_size?: InputMaybe<Scalars['String']['input']>;
  parent_product_code?: InputMaybe<Scalars['String']['input']>;
  parent_product_id?: InputMaybe<Scalars['ID']['input']>;
  parent_product_name?: InputMaybe<Scalars['String']['input']>;
  prefer_customer?: InputMaybe<Scalars['String']['input']>;
  prefer_customer_id?: InputMaybe<Scalars['ID']['input']>;
  price_breaks_type?: InputMaybe<Scalars['String']['input']>;
  price_note?: InputMaybe<Scalars['String']['input']>;
  pricebreaks?: InputMaybe<Array<ProductPriceBreaksInput>>;
  pricing_bleed?: InputMaybe<Scalars['String']['input']>;
  pricing_method?: InputMaybe<Scalars['String']['input']>;
  product_base?: InputMaybe<Scalars['String']['input']>;
  product_desciption?: InputMaybe<Scalars['String']['input']>;
  product_lang?: InputMaybe<Scalars['String']['input']>;
  product_note?: InputMaybe<Scalars['String']['input']>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  production_step?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<Scalars['Float']['input']>>;
  products_upload?: InputMaybe<Scalars['String']['input']>;
  profit?: InputMaybe<Scalars['String']['input']>;
  pst_tax?: InputMaybe<Scalars['String']['input']>;
  purchasing?: InputMaybe<Scalars['String']['input']>;
  qty_in_stock?: InputMaybe<Scalars['Float']['input']>;
  rediscount?: InputMaybe<Scalars['Float']['input']>;
  rediscount_unit?: InputMaybe<Scalars['String']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  replace_by?: InputMaybe<Scalars['ID']['input']>;
  saved_dir?: InputMaybe<Scalars['String']['input']>;
  sell_by?: InputMaybe<Scalars['String']['input']>;
  sell_price?: InputMaybe<Scalars['Float']['input']>;
  sell_price_intax?: InputMaybe<Scalars['Float']['input']>;
  sellprices?: InputMaybe<Array<ProductPriceBreaksInput>>;
  shipping_cost?: InputMaybe<Scalars['Float']['input']>;
  shipping_size_unit?: InputMaybe<Scalars['String']['input']>;
  shipping_sizeh?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizel?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizew?: InputMaybe<Scalars['Float']['input']>;
  shipping_weight?: InputMaybe<Scalars['Float']['input']>;
  shipping_weight_unit?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  sizeh?: InputMaybe<Scalars['Float']['input']>;
  sizeh_unit?: InputMaybe<Scalars['String']['input']>;
  sizew?: InputMaybe<Scalars['Float']['input']>;
  sizew_unit?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  small_format?: InputMaybe<Scalars['String']['input']>;
  sold_by?: InputMaybe<Scalars['String']['input']>;
  special_order?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  stock_by?: InputMaybe<Scalars['String']['input']>;
  stock_code?: InputMaybe<Scalars['String']['input']>;
  stock_des_current?: InputMaybe<Scalars['String']['input']>;
  stocktakes?: InputMaybe<Scalars['String']['input']>;
  sum_amount?: InputMaybe<Scalars['Float']['input']>;
  sum_sub_total?: InputMaybe<Scalars['Float']['input']>;
  sum_tax?: InputMaybe<Scalars['Float']['input']>;
  supplier?: InputMaybe<Array<ProductPriceBreaksInput>>;
  tag?: InputMaybe<Array<Scalars['String']['input']>>;
  tag_category?: InputMaybe<Scalars['String']['input']>;
  tag_group?: InputMaybe<Scalars['String']['input']>;
  tag_sales_rep?: InputMaybe<Scalars['String']['input']>;
  tag_tags?: InputMaybe<Scalars['String']['input']>;
  tech_notes?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  thickness_unit?: InputMaybe<Scalars['String']['input']>;
  time_check_stock?: InputMaybe<Scalars['String']['input']>;
  under_over?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  update_price_by?: InputMaybe<Scalars['ID']['input']>;
  update_price_by_name?: InputMaybe<Scalars['String']['input']>;
  update_price_date?: InputMaybe<Scalars['DateTime']['input']>;
  upload_file_product?: InputMaybe<Scalars['Float']['input']>;
  web_enable?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_size?: InputMaybe<Scalars['String']['input']>;
  weight_unit?: InputMaybe<Scalars['String']['input']>;
};

/** productDetail */
export type ProductDetail = {
  __typename?: 'ProductDetail';
  _id: Scalars['ID']['output'];
  ae_product?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  allow_design?: Maybe<Scalars['Float']['output']>;
  approved?: Maybe<Scalars['Float']['output']>;
  brands?: Maybe<Array<Scalars['Float']['output']>>;
  clone_product?: Maybe<Scalars['Float']['output']>;
  custom_size_from_option?: Maybe<Scalars['Float']['output']>;
  custom_type?: Maybe<Scalars['Float']['output']>;
  custom_web_discount?: Maybe<Scalars['Float']['output']>;
  custom_web_discount_unit?: Maybe<Scalars['String']['output']>;
  dept_code?: Maybe<Scalars['String']['output']>;
  disable_add_to_cart?: Maybe<Scalars['Float']['output']>;
  disable_size_option?: Maybe<Scalars['Float']['output']>;
  expiry_date?: Maybe<Scalars['Float']['output']>;
  index_by_company?: Maybe<Scalars['Float']['output']>;
  is_custom_size?: Maybe<Scalars['Float']['output']>;
  is_inventory?: Maybe<Scalars['Float']['output']>;
  item_code?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Array<Scalars['Float']['output']>>;
  language_tag?: Maybe<Array<Scalars['Float']['output']>>;
  location_code?: Maybe<Scalars['String']['output']>;
  location_list?: Maybe<Array<Scalars['Float']['output']>>;
  location_product?: Maybe<Array<Scalars['Float']['output']>>;
  location_type?: Maybe<Array<Scalars['Float']['output']>>;
  max_depth?: Maybe<Scalars['Float']['output']>;
  max_height?: Maybe<Scalars['Float']['output']>;
  max_quantity?: Maybe<Scalars['Float']['output']>;
  max_width?: Maybe<Scalars['Float']['output']>;
  mer?: Maybe<Array<Scalars['Float']['output']>>;
  min_depth?: Maybe<Scalars['Float']['output']>;
  min_height?: Maybe<Scalars['Float']['output']>;
  min_quantity?: Maybe<Scalars['Float']['output']>;
  min_width?: Maybe<Scalars['Float']['output']>;
  mores_data?: Maybe<Scalars['String']['output']>;
  mores_options?: Maybe<Array<MoreOptions>>;
  name?: Maybe<Scalars['String']['output']>;
  name_fr?: Maybe<Scalars['String']['output']>;
  parent_clone_product_id?: Maybe<Scalars['ID']['output']>;
  prefer_customer?: Maybe<Scalars['String']['output']>;
  prefer_customer_id?: Maybe<Scalars['ID']['output']>;
  product_description_en?: Maybe<Scalars['String']['output']>;
  product_description_french?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['ID']['output']>;
  product_image_alt?: Maybe<Scalars['String']['output']>;
  product_label?: Maybe<Scalars['Float']['output']>;
  product_type?: Maybe<Scalars['String']['output']>;
  production_time?: Maybe<Scalars['Float']['output']>;
  products?: Maybe<Array<Scalars['Float']['output']>>;
  products_upload?: Maybe<Array<Scalars['String']['output']>>;
  quantity_in_stock?: Maybe<Scalars['Float']['output']>;
  quantity_per_month?: Maybe<Scalars['Float']['output']>;
  quick_code?: Maybe<Scalars['String']['output']>;
  rediscount?: Maybe<Scalars['Float']['output']>;
  reference_number?: Maybe<Scalars['String']['output']>;
  seo_description?: Maybe<Scalars['String']['output']>;
  seo_keywords?: Maybe<Scalars['String']['output']>;
  seo_title?: Maybe<Scalars['String']['output']>;
  shipping_cost?: Maybe<Scalars['Float']['output']>;
  shipping_sizeh?: Maybe<Scalars['Float']['output']>;
  shipping_sizel?: Maybe<Scalars['Float']['output']>;
  shipping_sizew?: Maybe<Scalars['Float']['output']>;
  shipping_weight?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  txt_multy_sponsor?: Maybe<Scalars['Float']['output']>;
  upload_file_product?: Maybe<Scalars['Float']['output']>;
};

export type ProductDetailCreateInput = {
  is_banner?: InputMaybe<Scalars['Float']['input']>;
  is_category?: InputMaybe<Scalars['Float']['input']>;
  is_download?: InputMaybe<Scalars['Float']['input']>;
  is_thumb?: InputMaybe<Scalars['Float']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  product_image?: InputMaybe<Scalars['String']['input']>;
  product_image_name?: InputMaybe<Scalars['ObjectId']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductDetailUpdateInput = {
  ae_product?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  allow_design?: InputMaybe<Scalars['Float']['input']>;
  approved?: InputMaybe<Scalars['Float']['input']>;
  brands?: InputMaybe<Array<Scalars['Float']['input']>>;
  clone_product?: InputMaybe<Scalars['Float']['input']>;
  custom_size_from_option?: InputMaybe<Scalars['Float']['input']>;
  custom_type?: InputMaybe<Scalars['Float']['input']>;
  custom_web_discount?: InputMaybe<Scalars['Float']['input']>;
  custom_web_discount_unit?: InputMaybe<Scalars['String']['input']>;
  dept_code?: InputMaybe<Scalars['String']['input']>;
  disable_add_to_cart?: InputMaybe<Scalars['Float']['input']>;
  disable_size_option?: InputMaybe<Scalars['Float']['input']>;
  expiry_date?: InputMaybe<Scalars['Float']['input']>;
  index_by_company?: InputMaybe<Scalars['Float']['input']>;
  is_custom_size?: InputMaybe<Scalars['Float']['input']>;
  is_inventory?: InputMaybe<Scalars['Float']['input']>;
  item_code?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Array<Scalars['Float']['input']>>;
  language_tag?: InputMaybe<Array<Scalars['Float']['input']>>;
  location_code?: InputMaybe<Scalars['String']['input']>;
  location_list?: InputMaybe<Array<Scalars['Float']['input']>>;
  location_product?: InputMaybe<Array<Scalars['Float']['input']>>;
  location_type?: InputMaybe<Array<Scalars['Float']['input']>>;
  max_depth?: InputMaybe<Scalars['Float']['input']>;
  max_height?: InputMaybe<Scalars['Float']['input']>;
  max_quantity?: InputMaybe<Scalars['Float']['input']>;
  max_width?: InputMaybe<Scalars['Float']['input']>;
  mer?: InputMaybe<Array<Scalars['Float']['input']>>;
  min_depth?: InputMaybe<Scalars['Float']['input']>;
  min_height?: InputMaybe<Scalars['Float']['input']>;
  min_quantity?: InputMaybe<Scalars['Float']['input']>;
  min_width?: InputMaybe<Scalars['Float']['input']>;
  mores_data?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_fr?: InputMaybe<Scalars['String']['input']>;
  parent_clone_product_id?: InputMaybe<Scalars['ID']['input']>;
  prefer_customer?: InputMaybe<Scalars['String']['input']>;
  prefer_customer_id?: InputMaybe<Scalars['ID']['input']>;
  product_description_en?: InputMaybe<Scalars['String']['input']>;
  product_description_french?: InputMaybe<Scalars['String']['input']>;
  product_image_alt?: InputMaybe<Scalars['String']['input']>;
  product_label?: InputMaybe<Scalars['Float']['input']>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  production_time?: InputMaybe<Scalars['Float']['input']>;
  products?: InputMaybe<Array<Scalars['Float']['input']>>;
  products_upload?: InputMaybe<Array<Scalars['String']['input']>>;
  quantity_in_stock?: InputMaybe<Scalars['Float']['input']>;
  quantity_per_month?: InputMaybe<Scalars['Float']['input']>;
  quick_code?: InputMaybe<Scalars['String']['input']>;
  rediscount?: InputMaybe<Scalars['Float']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  seo_description?: InputMaybe<Scalars['String']['input']>;
  seo_keywords?: InputMaybe<Scalars['String']['input']>;
  seo_title?: InputMaybe<Scalars['String']['input']>;
  shipping_cost?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizeh?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizel?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizew?: InputMaybe<Scalars['Float']['input']>;
  shipping_weight?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  txt_multy_sponsor?: InputMaybe<Scalars['Float']['input']>;
  upload_file_product?: InputMaybe<Scalars['Float']['input']>;
};

/** productImages */
export type ProductImages = {
  __typename?: 'ProductImages';
  _id: Scalars['ID']['output'];
  company_id?: Maybe<Scalars['String']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  is_banner?: Maybe<Scalars['Float']['output']>;
  is_category?: Maybe<Scalars['Float']['output']>;
  is_download?: Maybe<Scalars['Float']['output']>;
  is_thumb?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  product_image?: Maybe<Scalars['String']['output']>;
  product_image_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ProductImagesCreateInput = {
  is_banner?: InputMaybe<Scalars['Float']['input']>;
  is_category?: InputMaybe<Scalars['Float']['input']>;
  is_download?: InputMaybe<Scalars['Float']['input']>;
  is_thumb?: InputMaybe<Scalars['Float']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  product_image?: InputMaybe<Scalars['String']['input']>;
  product_image_name?: InputMaybe<Scalars['ObjectId']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductMadeUp = {
  __typename?: 'ProductMadeUp';
  category?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['ID']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  margin?: Maybe<Scalars['Float']['output']>;
  markup?: Maybe<Scalars['Float']['output']>;
  oum?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['ID']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ProductMadeUpInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  margin?: InputMaybe<Scalars['Float']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
  oum?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  adjustment?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['Float']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  group_order?: Maybe<Scalars['Float']['output']>;
  group_type?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  margin?: Maybe<Scalars['Float']['output']>;
  markup?: Maybe<Scalars['Float']['output']>;
  option_group?: Maybe<Scalars['String']['output']>;
  oum?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['ID']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  require?: Maybe<Scalars['Float']['output']>;
  same_parent?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  sub_total?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionInput = {
  adjustment?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Float']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  group_order?: InputMaybe<Scalars['Float']['input']>;
  group_type?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Float']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  margin?: InputMaybe<Scalars['Float']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
  option_group?: InputMaybe<Scalars['String']['input']>;
  oum?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  require?: InputMaybe<Scalars['Float']['input']>;
  same_parent?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  sub_total?: InputMaybe<Scalars['Float']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductPriceBreaks = {
  __typename?: 'ProductPriceBreaks';
  deleted?: Maybe<Scalars['Boolean']['output']>;
  range_from?: Maybe<Scalars['Float']['output']>;
  range_to?: Maybe<Scalars['Float']['output']>;
  sell_category?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ProductPriceBreaksInput = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  range_from?: InputMaybe<Scalars['Float']['input']>;
  range_to?: InputMaybe<Scalars['Float']['input']>;
  sell_category?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductSellprices = {
  __typename?: 'ProductSellprices';
  deleted?: Maybe<Scalars['Boolean']['output']>;
  sell_category?: Maybe<Scalars['String']['output']>;
  sell_default?: Maybe<Scalars['Float']['output']>;
  sell_unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ProductSupplier = {
  __typename?: 'ProductSupplier';
  company_id?: Maybe<Scalars['ID']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['ID']['output']>;
  sell_by?: Maybe<Scalars['String']['output']>;
  sell_price?: Maybe<Scalars['Float']['output']>;
  sizeh?: Maybe<Scalars['Float']['output']>;
  sizeh_unit?: Maybe<Scalars['String']['output']>;
  sizew?: Maybe<Scalars['Float']['output']>;
  sizew_unit?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type ProductUpdateInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  anvy_item?: InputMaybe<Scalars['Float']['input']>;
  ao_item?: InputMaybe<Scalars['Float']['input']>;
  approved?: InputMaybe<Scalars['Float']['input']>;
  arr_stock_qty?: InputMaybe<Scalars['Float']['input']>;
  assemply_item?: InputMaybe<Scalars['Float']['input']>;
  brands?: InputMaybe<Array<Scalars['Float']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['String']['input']>;
  check_stock_stracking?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  combination_calculation?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  cost_price?: InputMaybe<Scalars['Float']['input']>;
  created_by?: InputMaybe<Scalars['ID']['input']>;
  date_modified?: InputMaybe<Scalars['DateTime']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  depth_unit?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  excel_file?: InputMaybe<Scalars['String']['input']>;
  group_product?: InputMaybe<Scalars['String']['input']>;
  group_type?: InputMaybe<Scalars['String']['input']>;
  gst_tax?: InputMaybe<Scalars['String']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  image_file?: InputMaybe<Scalars['String']['input']>;
  imgfile_not_required?: InputMaybe<Scalars['String']['input']>;
  in_stock?: InputMaybe<Scalars['String']['input']>;
  is_custom_size?: InputMaybe<Scalars['Float']['input']>;
  is_master_product?: InputMaybe<Scalars['Boolean']['input']>;
  is_printer?: InputMaybe<Scalars['Float']['input']>;
  is_rfq?: InputMaybe<Scalars['Float']['input']>;
  is_special_product?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Array<Scalars['Float']['input']>>;
  language_tag?: InputMaybe<Array<Scalars['Float']['input']>>;
  languages?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  listlangs?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Scalars['String']['input']>;
  madeup?: InputMaybe<Array<ProductMadeUpInput>>;
  margin?: InputMaybe<Scalars['Float']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
  material_tag?: InputMaybe<Array<Scalars['Float']['input']>>;
  mer?: InputMaybe<Array<Scalars['Float']['input']>>;
  modified_by?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<ProductOptionInput>>;
  otherdetails?: InputMaybe<Scalars['String']['input']>;
  oum?: InputMaybe<Scalars['String']['input']>;
  oum_depend?: InputMaybe<Scalars['String']['input']>;
  paper_size?: InputMaybe<Scalars['String']['input']>;
  parent_product_code?: InputMaybe<Scalars['String']['input']>;
  parent_product_id?: InputMaybe<Scalars['ID']['input']>;
  parent_product_name?: InputMaybe<Scalars['String']['input']>;
  prefer_customer?: InputMaybe<Scalars['String']['input']>;
  prefer_customer_id?: InputMaybe<Scalars['ID']['input']>;
  price_breaks_type?: InputMaybe<Scalars['String']['input']>;
  price_note?: InputMaybe<Scalars['String']['input']>;
  pricebreaks?: InputMaybe<Array<ProductPriceBreaksInput>>;
  pricing_bleed?: InputMaybe<Scalars['String']['input']>;
  pricing_method?: InputMaybe<Scalars['String']['input']>;
  product_base?: InputMaybe<Scalars['String']['input']>;
  product_desciption?: InputMaybe<Scalars['String']['input']>;
  product_lang?: InputMaybe<Scalars['String']['input']>;
  product_note?: InputMaybe<Scalars['String']['input']>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  production_step?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<Scalars['Float']['input']>>;
  products_upload?: InputMaybe<Scalars['String']['input']>;
  profit?: InputMaybe<Scalars['String']['input']>;
  pst_tax?: InputMaybe<Scalars['String']['input']>;
  purchasing?: InputMaybe<Scalars['String']['input']>;
  qty_in_stock?: InputMaybe<Scalars['Float']['input']>;
  rediscount?: InputMaybe<Scalars['Float']['input']>;
  rediscount_unit?: InputMaybe<Scalars['String']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  replace_by?: InputMaybe<Scalars['ID']['input']>;
  saved_dir?: InputMaybe<Scalars['String']['input']>;
  sell_by?: InputMaybe<Scalars['String']['input']>;
  sell_price?: InputMaybe<Scalars['Float']['input']>;
  sell_price_intax?: InputMaybe<Scalars['Float']['input']>;
  sellprices?: InputMaybe<Array<ProductPriceBreaksInput>>;
  shipping_cost?: InputMaybe<Scalars['Float']['input']>;
  shipping_size_unit?: InputMaybe<Scalars['String']['input']>;
  shipping_sizeh?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizel?: InputMaybe<Scalars['Float']['input']>;
  shipping_sizew?: InputMaybe<Scalars['Float']['input']>;
  shipping_weight?: InputMaybe<Scalars['Float']['input']>;
  shipping_weight_unit?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  sizeh?: InputMaybe<Scalars['Float']['input']>;
  sizeh_unit?: InputMaybe<Scalars['String']['input']>;
  sizew?: InputMaybe<Scalars['Float']['input']>;
  sizew_unit?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  small_format?: InputMaybe<Scalars['String']['input']>;
  sold_by?: InputMaybe<Scalars['String']['input']>;
  special_order?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  stock_by?: InputMaybe<Scalars['String']['input']>;
  stock_code?: InputMaybe<Scalars['String']['input']>;
  stock_des_current?: InputMaybe<Scalars['String']['input']>;
  stocktakes?: InputMaybe<Scalars['String']['input']>;
  sum_amount?: InputMaybe<Scalars['Float']['input']>;
  sum_sub_total?: InputMaybe<Scalars['Float']['input']>;
  sum_tax?: InputMaybe<Scalars['Float']['input']>;
  supplier?: InputMaybe<Array<ProductPriceBreaksInput>>;
  tag?: InputMaybe<Array<Scalars['String']['input']>>;
  tag_category?: InputMaybe<Scalars['String']['input']>;
  tag_group?: InputMaybe<Scalars['String']['input']>;
  tag_sales_rep?: InputMaybe<Scalars['String']['input']>;
  tag_tags?: InputMaybe<Scalars['String']['input']>;
  tech_notes?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  thickness?: InputMaybe<Scalars['Float']['input']>;
  thickness_unit?: InputMaybe<Scalars['String']['input']>;
  time_check_stock?: InputMaybe<Scalars['String']['input']>;
  under_over?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  update_price_by?: InputMaybe<Scalars['ID']['input']>;
  update_price_by_name?: InputMaybe<Scalars['String']['input']>;
  update_price_date?: InputMaybe<Scalars['DateTime']['input']>;
  upload_file_product?: InputMaybe<Scalars['Float']['input']>;
  web_enable?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_size?: InputMaybe<Scalars['String']['input']>;
  weight_unit?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  apis: Array<Apis>;
  apisLast: Apis;
  apisTotal: Scalars['Int']['output'];
  cloudtag: Array<CloudTag>;
  cloudtagLast: CloudTag;
  cloudtagTotal: Scalars['Int']['output'];
  companies: Array<Company>;
  company: Company;
  companyLast: Company;
  companyTotal: Scalars['Int']['output'];
  contacts: Array<Contacts>;
  contactsByname: Contacts;
  costcentre: Array<CostCentre>;
  costcentreLast: CostCentre;
  costcentreTotal: Scalars['Int']['output'];
  getAllUser: Array<User>;
  getListApis: Array<Apis>;
  getListCloudTag: Array<CloudTag>;
  getListCompany: Array<Company>;
  getListCostCentre: Array<CostCentre>;
  getListProduct: Array<Product>;
  getListProductDetail: Array<ProductDetail>;
  getListProductImages: Array<ProductImages>;
  me: User;
  product: Product;
  productLast: Product;
  productTotal: Scalars['Int']['output'];
  productdetail: Array<ProductDetail>;
  productdetailLast: ProductDetail;
  productdetailTotal: Scalars['Int']['output'];
  productimages: Array<ProductImages>;
  productimagesLast: ProductImages;
  productimagesTotal: Scalars['Int']['output'];
  products: Array<Product>;
  setting?: Maybe<Setting>;
  settings?: Maybe<Array<Setting>>;
  totalRecordApis: Scalars['Int']['output'];
  totalRecordCloudTag: Scalars['Int']['output'];
  totalRecordCompany: Scalars['Int']['output'];
  totalRecordCostCentre: Scalars['Int']['output'];
  totalRecordProduct: Scalars['Int']['output'];
  totalRecordProductDetail: Scalars['Int']['output'];
  totalRecordProductImages: Scalars['Int']['output'];
  user: User;
};


export type QueryApisArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryApisLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApisTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryCloudtagArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryCloudtagLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCloudtagTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryCompaniesArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryCompanyArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompanyLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompanyTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryContactsBynameArgs = {
  full_name: Scalars['String']['input'];
};


export type QueryCostcentreArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryCostcentreLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCostcentreTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryGetListApisArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListCloudTagArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListCompanyArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListCostCentreArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListProductArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListProductDetailArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryGetListProductImagesArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryProductArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryProductdetailArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryProductdetailLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductdetailTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryProductimagesArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryProductimagesLastArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductimagesTotalArgs = {
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QueryProductsArgs = {
  orderBy?: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Array<SearchCriterion>>;
};


export type QuerySettingArgs = {
  where: SettingWhereInput;
};


export type QuerySettingsArgs = {
  orderBy?: InputMaybe<Array<SettingOrderInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryTotalRecordApisArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordCloudTagArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordCompanyArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordCostCentreArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordProductArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordProductDetailArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryTotalRecordProductImagesArgs = {
  itemOnPage?: Scalars['Int']['input'];
  pageNumber?: Scalars['Int']['input'];
  sort_by?: Scalars['String']['input'];
  where?: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SearchCriterion = {
  fieldType?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  operator: ComparisonOperator;
  value: Scalars['AnyType']['input'];
};

export type SearchInput = {
  and: Array<SearchCriterion>;
  or?: InputMaybe<Array<SearchCriterion>>;
};

/** settings */
export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  option?: Maybe<Array<SettingOption>>;
  setting_description?: Maybe<Scalars['String']['output']>;
  setting_group?: Maybe<Scalars['String']['output']>;
  setting_name?: Maybe<Scalars['String']['output']>;
  setting_note?: Maybe<Scalars['String']['output']>;
  setting_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

export type SettingCreateInput = {
  option?: InputMaybe<Array<SettingOptionCreateInput>>;
  setting_description: Scalars['String']['input'];
  setting_group: Scalars['String']['input'];
  setting_name: Scalars['String']['input'];
  setting_type: Scalars['String']['input'];
};

export type SettingOption = {
  __typename?: 'SettingOption';
  _id: Scalars['String']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  has_children?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  option_type?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

export type SettingOptionCreateInput = {
  has_children?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  option_type?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

export type SettingOptionWhereInput = {
  _id?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type SettingOrderInput = {
  setting_name?: InputMaybe<SortOrder>;
};

export type SettingUpdateInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Array<SettingOptionCreateInput>>;
  setting_description?: InputMaybe<Scalars['String']['input']>;
  setting_group?: InputMaybe<Scalars['String']['input']>;
  setting_name?: InputMaybe<Scalars['String']['input']>;
  setting_note?: InputMaybe<Scalars['String']['input']>;
  setting_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

export type SettingWhereInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  setting_group?: InputMaybe<Scalars['String']['input']>;
  setting_name?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  ApisAdded: Apis;
  CloudTagAdded: CloudTag;
  CostCentreAdded: CostCentre;
  ProductDetailAdded: ProductDetail;
  ProductImagesAdded: ProductImages;
  apisAdded: Apis;
  cloudtagAdded: CloudTag;
  companyAdded: Company;
  costcentreAdded: CostCentre;
  productAdded: Product;
  productdetailAdded: ProductDetail;
  productimagesAdded: ProductImages;
};

/** user */
export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  direct_dial?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  info: Scalars['JSON']['output'];
  is_employee?: Maybe<Scalars['Float']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  new_encrypt?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  products: Array<Product>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  user_password?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserLoginInput = {
  /** Login password */
  password: Scalars['String']['input'];
  /** Login username */
  username: Scalars['String']['input'];
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type GetOptionProductMutationVariables = Exact<{
  _id: Scalars['String']['input'];
}>;


export type GetOptionProductMutation = { __typename?: 'Mutation', getOptionProduct: Array<{ __typename?: 'ProductOption', product_name?: string | null, code?: string | null, sku?: string | null, oum?: string | null, unit_price?: number | null, markup?: number | null, margin?: number | null, sub_total?: number | null }> };

export const GetOptionProductDocument = gql`
    mutation getOptionProduct($_id: String!) {
  getOptionProduct(_id: $_id) {
    product_name
    code
    sku
    oum
    unit_price
    markup
    margin
    sub_total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOptionProductGQL extends Apollo.Mutation<GetOptionProductMutation, GetOptionProductMutationVariables> {
    document = GetOptionProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
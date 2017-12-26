import React from 'react'
import faker from 'faker'
import { shadow } from 'enzyme'

import { expect } from '../../utils/chai'
import { generateProductList } from '../../utils/testData'

import FilterableProductTable from './index'

describe('FilterableProductTable', () => {
  let wrapper
  const products = generateProductList()

  // Render the component in the beforeEach so 
  // each test can get a new shallow rendered wrapper
  beforeEach(() => {
    wrapper = shallow(
      <FilterableProductTable
        products={ products }
      />
    )
  })
})

// check if the initial state is empty string
it('should initialize the filterText state to empty string', () => {
  expect(wrapper).to.have.state('filterText').to.equal('')
})

it('should initialize the inStockOnly state to false', () => {
  expect(wrapper).to.have.state('inStockOnly').to.equal(false)
})
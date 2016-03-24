

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var flatten = require('../../utils/flatten');
var markers = require('../../constants/markers');

function printJSXSpreadAttribute(print, node) {
  return flatten(['{...', markers.noBreak, print(node.argument), markers.noBreak, '}']);
}

module.exports = printJSXSpreadAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50SlNYU3ByZWFkQXR0cmlidXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFjQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMvQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7QUFFbkQsU0FBUyx1QkFBdUIsQ0FDOUIsS0FBWSxFQUNaLElBQXdCLEVBQ2pCO0FBQ1AsU0FBTyxPQUFPLENBQUMsQ0FDYixNQUFNLEVBQ04sT0FBTyxDQUFDLE9BQU8sRUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNwQixPQUFPLENBQUMsT0FBTyxFQUNmLEdBQUcsQ0FDSixDQUFDLENBQUM7Q0FDSjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDIiwiZmlsZSI6InByaW50SlNYU3ByZWFkQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHR5cGUge0pTWFNwcmVhZEF0dHJpYnV0ZX0gZnJvbSAnYXN0LXR5cGVzLWZsb3cnO1xuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcblxuY29uc3QgZmxhdHRlbiA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2ZsYXR0ZW4nKTtcbmNvbnN0IG1hcmtlcnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvbWFya2VycycpO1xuXG5mdW5jdGlvbiBwcmludEpTWFNwcmVhZEF0dHJpYnV0ZShcbiAgcHJpbnQ6IFByaW50LFxuICBub2RlOiBKU1hTcHJlYWRBdHRyaWJ1dGUsXG4pOiBMaW5lcyB7XG4gIHJldHVybiBmbGF0dGVuKFtcbiAgICAney4uLicsXG4gICAgbWFya2Vycy5ub0JyZWFrLFxuICAgIHByaW50KG5vZGUuYXJndW1lbnQpLFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICAnfScsXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50SlNYU3ByZWFkQXR0cmlidXRlO1xuIl19
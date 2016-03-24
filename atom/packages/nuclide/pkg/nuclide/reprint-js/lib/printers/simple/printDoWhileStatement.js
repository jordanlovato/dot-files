

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var markers = require('../../constants/markers');
var wrapStatement = require('../../wrappers/simple/wrapStatement');

function printDoWhileStatement(print, node) {
  var wrap = function wrap(x) {
    return wrapStatement(print, node, x);
  };
  return wrap([markers.hardBreak, 'do', markers.noBreak, markers.space, print(node.body), markers.noBreak, markers.space, 'while (', markers.openScope, markers.scopeIndent, markers.scopeBreak, print(node.test), markers.scopeBreak, markers.scopeDedent, markers.closeScope, ');']);
}

module.exports = printDoWhileStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50RG9XaGlsZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY0EsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7O0FBRXJFLFNBQVMscUJBQXFCLENBQUMsS0FBWSxFQUFFLElBQXNCLEVBQVM7QUFDMUUsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUFBLENBQUM7QUFDaEQsU0FBTyxJQUFJLENBQUMsQ0FDVixPQUFPLENBQUMsU0FBUyxFQUNqQixJQUFJLEVBQ0osT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2hCLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLEtBQUssRUFDYixTQUFTLEVBQ1QsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDaEIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsSUFBSSxDQUNMLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMiLCJmaWxlIjoicHJpbnREb1doaWxlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHR5cGUge0RvV2hpbGVTdGF0ZW1lbnR9IGZyb20gJ2FzdC10eXBlcy1mbG93JztcbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5cbmNvbnN0IG1hcmtlcnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvbWFya2VycycpO1xuY29uc3Qgd3JhcFN0YXRlbWVudCA9IHJlcXVpcmUoJy4uLy4uL3dyYXBwZXJzL3NpbXBsZS93cmFwU3RhdGVtZW50Jyk7XG5cbmZ1bmN0aW9uIHByaW50RG9XaGlsZVN0YXRlbWVudChwcmludDogUHJpbnQsIG5vZGU6IERvV2hpbGVTdGF0ZW1lbnQpOiBMaW5lcyB7XG4gIGNvbnN0IHdyYXAgPSB4ID0+IHdyYXBTdGF0ZW1lbnQocHJpbnQsIG5vZGUsIHgpO1xuICByZXR1cm4gd3JhcChbXG4gICAgbWFya2Vycy5oYXJkQnJlYWssXG4gICAgJ2RvJyxcbiAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgbWFya2Vycy5zcGFjZSxcbiAgICBwcmludChub2RlLmJvZHkpLFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgICd3aGlsZSAoJyxcbiAgICBtYXJrZXJzLm9wZW5TY29wZSxcbiAgICBtYXJrZXJzLnNjb3BlSW5kZW50LFxuICAgIG1hcmtlcnMuc2NvcGVCcmVhayxcbiAgICBwcmludChub2RlLnRlc3QpLFxuICAgIG1hcmtlcnMuc2NvcGVCcmVhayxcbiAgICBtYXJrZXJzLnNjb3BlRGVkZW50LFxuICAgIG1hcmtlcnMuY2xvc2VTY29wZSxcbiAgICAnKTsnLFxuICBdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcmludERvV2hpbGVTdGF0ZW1lbnQ7XG4iXX0=
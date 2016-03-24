

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var flatten = require('../../utils/flatten');
var markers = require('../../constants/markers');

function printClassProperty(print, node) {
  var parts = [];
  if (node['static']) {
    parts = parts.concat(['static', markers.noBreak, markers.space]);
  }

  // TODO: Computed class properties don't seem to be supported by Babylon yet.

  parts = parts.concat([print(node.key)]);

  if (node.value) {
    parts = parts.concat([markers.noBreak, markers.space, '=', markers.noBreak, markers.space, print(node.value)]);
  }

  if (node.typeAnnotation) {
    parts = parts.concat(print(node.typeAnnotation));
  }

  parts = parts.concat([markers.noBreak, ';', markers.hardBreak]);

  return flatten(parts);
}

module.exports = printClassProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50Q2xhc3NQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY0EsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7O0FBRW5ELFNBQVMsa0JBQWtCLENBQUMsS0FBWSxFQUFFLElBQW1CLEVBQVM7QUFDcEUsTUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsTUFBSSxJQUFJLFVBQU8sRUFBRTtBQUNmLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLFFBQVEsRUFDUixPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQyxDQUFDO0dBQ0o7Ozs7QUFJRCxPQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDLENBQUM7O0FBRUgsTUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QsU0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkIsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsS0FBSyxFQUNiLEdBQUcsRUFDSCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDbEIsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsTUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3ZCLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztHQUNsRDs7QUFFRCxPQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNuQixPQUFPLENBQUMsT0FBTyxFQUNmLEdBQUcsRUFDSCxPQUFPLENBQUMsU0FBUyxDQUNsQixDQUFDLENBQUM7O0FBRUgsU0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDdkI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJwcmludENsYXNzUHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7Q2xhc3NQcm9wZXJ0eX0gZnJvbSAnYXN0LXR5cGVzLWZsb3cnO1xuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcblxuY29uc3QgZmxhdHRlbiA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2ZsYXR0ZW4nKTtcbmNvbnN0IG1hcmtlcnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvbWFya2VycycpO1xuXG5mdW5jdGlvbiBwcmludENsYXNzUHJvcGVydHkocHJpbnQ6IFByaW50LCBub2RlOiBDbGFzc1Byb3BlcnR5KTogTGluZXMge1xuICBsZXQgcGFydHMgPSBbXTtcbiAgaWYgKG5vZGUuc3RhdGljKSB7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgJ3N0YXRpYycsXG4gICAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgICBtYXJrZXJzLnNwYWNlLFxuICAgIF0pO1xuICB9XG5cbiAgLy8gVE9ETzogQ29tcHV0ZWQgY2xhc3MgcHJvcGVydGllcyBkb24ndCBzZWVtIHRvIGJlIHN1cHBvcnRlZCBieSBCYWJ5bG9uIHlldC5cblxuICBwYXJ0cyA9IHBhcnRzLmNvbmNhdChbXG4gICAgcHJpbnQobm9kZS5rZXkpLFxuICBdKTtcblxuICBpZiAobm9kZS52YWx1ZSkge1xuICAgIHBhcnRzID0gcGFydHMuY29uY2F0KFtcbiAgICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICAgIG1hcmtlcnMuc3BhY2UsXG4gICAgICAnPScsXG4gICAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgICBtYXJrZXJzLnNwYWNlLFxuICAgICAgcHJpbnQobm9kZS52YWx1ZSksXG4gICAgXSk7XG4gIH1cblxuICBpZiAobm9kZS50eXBlQW5ub3RhdGlvbikge1xuICAgIHBhcnRzID0gcGFydHMuY29uY2F0KHByaW50KG5vZGUudHlwZUFubm90YXRpb24pKTtcbiAgfVxuXG4gIHBhcnRzID0gcGFydHMuY29uY2F0KFtcbiAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgJzsnLFxuICAgIG1hcmtlcnMuaGFyZEJyZWFrLFxuICBdKTtcblxuICByZXR1cm4gZmxhdHRlbihwYXJ0cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRDbGFzc1Byb3BlcnR5O1xuIl19
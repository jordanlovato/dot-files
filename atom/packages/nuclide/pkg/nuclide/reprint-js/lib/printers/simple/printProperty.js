

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var flatten = require('../../utils/flatten');
var markers = require('../../constants/markers');

function printProperty(print, node) {
  var parts = [];

  if (node.kind === 'get') {
    parts = parts.concat(['get', markers.noBreak, markers.space]);
  } else if (node.kind === 'set') {
    parts = parts.concat(['set', markers.noBreak, markers.space]);
  }

  if (node.value && node.value.async) {
    parts = parts.concat(['async', markers.noBreak, markers.space]);
  }

  if (node.value && node.value.generator) {
    parts = parts.concat(['*', markers.noBreak]);
  }

  if (node.computed) {
    parts = parts.concat(['[', markers.noBreak, print(node.key), markers.noBreak, ']', markers.noBreak]);
  } else {
    parts = parts.concat([print(node.key), markers.noBreak]);
  }

  // TODO: Force the scope to break when a property is a method. Or if the
  // value is a function expression.
  if (node.method) {
    parts = parts.concat([markers.noBreak, print(node.value)]);
  } else if (!node.shorthand) {
    parts = parts.concat([':', markers.noBreak, markers.space, print(node.value)]);
  } else if (node.key.type !== node.value.type) {
    // This is a very strange case in the AST where we are in a shorthand
    // property but key and value do not have the same type. This can happen
    // when using defaults in an object pattern. E.g:
    //
    //   var {x = 4} = a;
    //
    // x is shorthand but its value is an assignment expression. In this case
    // we will just print the value.
    parts = [print(node.value)];
  }

  return flatten(parts);
}

module.exports = printProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50UHJvcGVydHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWNBLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQy9DLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztBQUVuRCxTQUFTLGFBQWEsQ0FBQyxLQUFZLEVBQUUsSUFBYyxFQUFTO0FBQzFELE1BQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFZixNQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQ3ZCLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLEtBQUssRUFDTCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQyxDQUFDO0dBQ0osTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQzlCLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLEtBQUssRUFDTCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsTUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2xDLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLE9BQU8sRUFDUCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsTUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3RDLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLEdBQUcsRUFDSCxPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDLENBQUM7R0FDSjs7QUFFRCxNQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDakIsU0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkIsR0FBRyxFQUNILE9BQU8sQ0FBQyxPQUFPLEVBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDZixPQUFPLENBQUMsT0FBTyxFQUNmLEdBQUcsRUFDSCxPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDLENBQUM7R0FDSixNQUFNO0FBQ0wsU0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDLENBQUM7R0FDSjs7OztBQUlELE1BQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLFNBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25CLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDbEIsQ0FBQyxDQUFDO0dBQ0osTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUMxQixTQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNuQixHQUFHLEVBQ0gsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ2xCLENBQUMsQ0FBQztHQUNKLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTs7Ozs7Ozs7O0FBUzVDLFNBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztHQUM3Qjs7QUFFRCxTQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN2Qjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJwcmludFByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHR5cGUge0xpbmVzLCBQcmludH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbW9uJztcbmltcG9ydCB0eXBlIHtQcm9wZXJ0eX0gZnJvbSAnYXN0LXR5cGVzLWZsb3cnO1xuXG5jb25zdCBmbGF0dGVuID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZmxhdHRlbicpO1xuY29uc3QgbWFya2VycyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cy9tYXJrZXJzJyk7XG5cbmZ1bmN0aW9uIHByaW50UHJvcGVydHkocHJpbnQ6IFByaW50LCBub2RlOiBQcm9wZXJ0eSk6IExpbmVzIHtcbiAgbGV0IHBhcnRzID0gW107XG5cbiAgaWYgKG5vZGUua2luZCA9PT0gJ2dldCcpIHtcbiAgICBwYXJ0cyA9IHBhcnRzLmNvbmNhdChbXG4gICAgICAnZ2V0JyxcbiAgICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICAgIG1hcmtlcnMuc3BhY2UsXG4gICAgXSk7XG4gIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSAnc2V0Jykge1xuICAgIHBhcnRzID0gcGFydHMuY29uY2F0KFtcbiAgICAgICdzZXQnLFxuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgICAgbWFya2Vycy5zcGFjZSxcbiAgICBdKTtcbiAgfVxuXG4gIGlmIChub2RlLnZhbHVlICYmIG5vZGUudmFsdWUuYXN5bmMpIHtcbiAgICBwYXJ0cyA9IHBhcnRzLmNvbmNhdChbXG4gICAgICAnYXN5bmMnLFxuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgICAgbWFya2Vycy5zcGFjZSxcbiAgICBdKTtcbiAgfVxuXG4gIGlmIChub2RlLnZhbHVlICYmIG5vZGUudmFsdWUuZ2VuZXJhdG9yKSB7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgJyonLFxuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgIF0pO1xuICB9XG5cbiAgaWYgKG5vZGUuY29tcHV0ZWQpIHtcbiAgICBwYXJ0cyA9IHBhcnRzLmNvbmNhdChbXG4gICAgICAnWycsXG4gICAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgICBwcmludChub2RlLmtleSksXG4gICAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgICAnXScsXG4gICAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgcHJpbnQobm9kZS5rZXkpLFxuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgIF0pO1xuICB9XG5cbiAgLy8gVE9ETzogRm9yY2UgdGhlIHNjb3BlIHRvIGJyZWFrIHdoZW4gYSBwcm9wZXJ0eSBpcyBhIG1ldGhvZC4gT3IgaWYgdGhlXG4gIC8vIHZhbHVlIGlzIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi5cbiAgaWYgKG5vZGUubWV0aG9kKSB7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgICAgcHJpbnQobm9kZS52YWx1ZSksXG4gICAgXSk7XG4gIH0gZWxzZSBpZiAoIW5vZGUuc2hvcnRoYW5kKSB7XG4gICAgcGFydHMgPSBwYXJ0cy5jb25jYXQoW1xuICAgICAgJzonLFxuICAgICAgbWFya2Vycy5ub0JyZWFrLFxuICAgICAgbWFya2Vycy5zcGFjZSxcbiAgICAgIHByaW50KG5vZGUudmFsdWUpLFxuICAgIF0pO1xuICB9IGVsc2UgaWYgKG5vZGUua2V5LnR5cGUgIT09IG5vZGUudmFsdWUudHlwZSkge1xuICAgIC8vIFRoaXMgaXMgYSB2ZXJ5IHN0cmFuZ2UgY2FzZSBpbiB0aGUgQVNUIHdoZXJlIHdlIGFyZSBpbiBhIHNob3J0aGFuZFxuICAgIC8vIHByb3BlcnR5IGJ1dCBrZXkgYW5kIHZhbHVlIGRvIG5vdCBoYXZlIHRoZSBzYW1lIHR5cGUuIFRoaXMgY2FuIGhhcHBlblxuICAgIC8vIHdoZW4gdXNpbmcgZGVmYXVsdHMgaW4gYW4gb2JqZWN0IHBhdHRlcm4uIEUuZzpcbiAgICAvL1xuICAgIC8vICAgdmFyIHt4ID0gNH0gPSBhO1xuICAgIC8vXG4gICAgLy8geCBpcyBzaG9ydGhhbmQgYnV0IGl0cyB2YWx1ZSBpcyBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24uIEluIHRoaXMgY2FzZVxuICAgIC8vIHdlIHdpbGwganVzdCBwcmludCB0aGUgdmFsdWUuXG4gICAgcGFydHMgPSBbcHJpbnQobm9kZS52YWx1ZSldO1xuICB9XG5cbiAgcmV0dXJuIGZsYXR0ZW4ocGFydHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50UHJvcGVydHk7XG4iXX0=
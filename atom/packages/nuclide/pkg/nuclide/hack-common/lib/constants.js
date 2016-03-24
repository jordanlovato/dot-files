Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var HACK_GRAMMARS = ['text.html.hack', 'text.html.php'];

/**
 * Constants here represent enums with the same values got from hh_client and the Hack web worker.
 */
module.exports = {

  CompletionType: {
    ID: 0,
    NEW: 1,
    TYPE: 2,
    CLASS_GET: 3,
    VAR: 4,
    NONE: 5
  },

  SymbolType: {
    CLASS: 0,
    FUNCTION: 1,
    METHOD: 2,
    LOCAL: 3,
    UNKNOWN: 4
  },

  SearchResultType: {
    CLASS: 0,
    TYPEDEF: 1,
    METHOD: 2,
    CLASS_VAR: 3,
    FUNCTION: 4,
    CONSTANT: 5,
    INTERFACE: 6,
    ABSTRACT_CLASS: 7,
    TRAIT: 8
  },

  HACK_GRAMMARS: HACK_GRAMMARS,
  HACK_GRAMMARS_SET: new Set(HACK_GRAMMARS)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFXQSxJQUFNLGFBQWEsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7OztBQVMxRCxNQUFNLENBQUMsT0FBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUU7QUFDZCxNQUFFLEVBQVUsQ0FBQztBQUNiLE9BQUcsRUFBUyxDQUFDO0FBQ2IsUUFBSSxFQUFRLENBQUM7QUFDYixhQUFTLEVBQUcsQ0FBQztBQUNiLE9BQUcsRUFBUyxDQUFDO0FBQ2IsUUFBSSxFQUFRLENBQUM7R0FDZDs7QUFFRCxZQUFVLEVBQUU7QUFDVixTQUFLLEVBQU0sQ0FBQztBQUNaLFlBQVEsRUFBRyxDQUFDO0FBQ1osVUFBTSxFQUFLLENBQUM7QUFDWixTQUFLLEVBQU0sQ0FBQztBQUNaLFdBQU8sRUFBSSxDQUFDO0dBQ2I7O0FBRUQsa0JBQWdCLEVBQUU7QUFDaEIsU0FBSyxFQUFXLENBQUM7QUFDakIsV0FBTyxFQUFTLENBQUM7QUFDakIsVUFBTSxFQUFVLENBQUM7QUFDakIsYUFBUyxFQUFPLENBQUM7QUFDakIsWUFBUSxFQUFRLENBQUM7QUFDakIsWUFBUSxFQUFRLENBQUM7QUFDakIsYUFBUyxFQUFPLENBQUM7QUFDakIsa0JBQWMsRUFBRSxDQUFDO0FBQ2pCLFNBQUssRUFBVyxDQUFDO0dBQ2xCOztBQUVELGVBQWEsRUFBYixhQUFhO0FBQ2IsbUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDO0NBQzFDLENBQUMiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuY29uc3QgSEFDS19HUkFNTUFSUyA9IFsndGV4dC5odG1sLmhhY2snLCAndGV4dC5odG1sLnBocCddO1xuXG5leHBvcnQgdHlwZSBDb21wbGV0aW9uVHlwZVZhbHVlID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1O1xuZXhwb3J0IHR5cGUgU3ltYm9sVHlwZVZhbHVlID0gMHwgMSB8IDIgfCAzIHwgNDtcbmV4cG9ydCB0eXBlIFNlYXJjaFJlc3VsdFR5cGVWYWx1ZSA9IDB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4O1xuXG4vKipcbiAqIENvbnN0YW50cyBoZXJlIHJlcHJlc2VudCBlbnVtcyB3aXRoIHRoZSBzYW1lIHZhbHVlcyBnb3QgZnJvbSBoaF9jbGllbnQgYW5kIHRoZSBIYWNrIHdlYiB3b3JrZXIuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIENvbXBsZXRpb25UeXBlOiB7XG4gICAgSUQgICAgICAgIDogMCxcbiAgICBORVcgICAgICAgOiAxLFxuICAgIFRZUEUgICAgICA6IDIsXG4gICAgQ0xBU1NfR0VUIDogMyxcbiAgICBWQVIgICAgICAgOiA0LFxuICAgIE5PTkUgICAgICA6IDUsXG4gIH0sXG5cbiAgU3ltYm9sVHlwZToge1xuICAgIENMQVNTICAgIDogMCxcbiAgICBGVU5DVElPTiA6IDEsXG4gICAgTUVUSE9EICAgOiAyLFxuICAgIExPQ0FMICAgIDogMyxcbiAgICBVTktOT1dOICA6IDQsXG4gIH0sXG5cbiAgU2VhcmNoUmVzdWx0VHlwZToge1xuICAgIENMQVNTOiAgICAgICAgICAwLFxuICAgIFRZUEVERUY6ICAgICAgICAxLFxuICAgIE1FVEhPRDogICAgICAgICAyLFxuICAgIENMQVNTX1ZBUjogICAgICAzLFxuICAgIEZVTkNUSU9OOiAgICAgICA0LFxuICAgIENPTlNUQU5UOiAgICAgICA1LFxuICAgIElOVEVSRkFDRTogICAgICA2LFxuICAgIEFCU1RSQUNUX0NMQVNTOiA3LFxuICAgIFRSQUlUOiAgICAgICAgICA4LFxuICB9LFxuXG4gIEhBQ0tfR1JBTU1BUlMsXG4gIEhBQ0tfR1JBTU1BUlNfU0VUOiBuZXcgU2V0KEhBQ0tfR1JBTU1BUlMpLFxufTtcbiJdfQ==
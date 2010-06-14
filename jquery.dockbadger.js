/*
  DockBadger.
  Requires jQuery (tested on 1.4.1, but no new features used).

  Copyright 2010 MyFreeWeb
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
(function($){  
    $.dockBadger = {
	init: function() {
	    window.original_title = document.title;
	    return $.dockBadger;
	},
	set: function(number) {
	    if (number == 0) {
		number = '';
		document.title = window.original_title;
	    }
	    else {
		if (typeof(window.fluid) != 'undefined') {
		    window.fluid.dockBadge = number;
		}
		else if (typeof(window.platform.icon) != 'undefined') {
		    window.platform.icon().badgeText = number;
		}
		else {
		    document.title = '(' + number + ') ' + window.orig_title;
		}	
	    }
	}
})(jQuery);
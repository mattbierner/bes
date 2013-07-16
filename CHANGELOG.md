# ChangeLog #

## 1.1.0 - July 15, 2013 ##
* Changed copy to grab constructor from prototype instead of object directly.
  This allows objects like {'constructor': ... } to be copied.

## 1.0.0 - May 20, 2013 ##
* Removed seal and freeze which don't make much sense for nonmutable objects.

## 0.2.0 - April 1, 2013 ##
* Added delete property.

## 0.1.0 - March 2, 2013 ##
* Initial release.

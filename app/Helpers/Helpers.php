<?php

namespace App\Helpers;
use App\Helpers\Fetch;

class Helpers
{
    public static function requirements($id = 'index')
    {
        /** Categories */
        $first_categories = Fetch::categories('first');
        $etc_categories = Fetch::categories('etc');
        $all_categories = Fetch::categories('all');
        /** End Categories */
        /** Popular Posts */
        $populars = Fetch::articles('populars');
        /** End Popular Posts */
        /** Trending Posts */
        $trendings = Fetch::articles('trendings');
        /** End Trending Posts */
        /** Element */
        $element = '<div id="'. $id .'"></div>';
        /** End Element */
        return compact([
            'first_categories', 'etc_categories', 'all_categories', 'populars', 'trendings', 'element'
        ]);
    }
}
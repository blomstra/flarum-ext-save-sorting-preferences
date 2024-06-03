<?php

/*
 * This file is part of blomstra/save-sorting-preferences.
 *
 * Copyright (c) 2024 Jaggy Gauran.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\SaveSortingPreferences;

use Flarum\Extend;

return [
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Middleware('forum'))->add(ApplyUserSortingMiddleware::class),
    (new Extend\Middleware('api'))->add(ApplyUserSortingMiddleware::class),
    (new Extend\User)->registerPreference('discussion_sort'),
];

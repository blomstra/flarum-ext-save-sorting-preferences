<?php

namespace Blomstra\SaveSortingPreferences;

use Flarum\Http\RequestUtil;
use Flarum\User\Guest;
use Illuminate\Support\Arr;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ApplyUserSortingMiddleware implements MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        if ($request->getUri()->getPath() !== '/') {
            return $handler->handle($request);
        }

        if ($actor instanceof Guest) {
            return $handler->handle($request);
        }

        $sort = Arr::get($request->getQueryParams(), 'sort');
        $lastSelectedSort = $actor->getPreference('discussion_sort');

        return $handler->handle($request->withQueryParams([
            'sort' => $sort ?? $lastSelectedSort,
        ]));
    }
}

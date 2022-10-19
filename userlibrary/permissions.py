from rest_framework import permissions


class IsOwnerOrAdminReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return bool(
            request.user and request.user.is_authenticated and (
                obj.owner == request.user or
                (request.user.is_staff and request.method in permissions.SAFE_METHODS)
            )
        )

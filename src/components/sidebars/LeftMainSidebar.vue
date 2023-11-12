<template>
  <div class="left-main-sidebar">
    <div class="left-main-sidebar__top">
      <div class="left-main-sidebar__brand">
        <base-icon name="go" width="100" height="92" />
        <base-icon name="brand" width="100" height="40.3" />
      </div>
      <div class="left-main-sidebar__links">
        <router-link v-for="(tab, i) in tabs" :key="i" :to="{ name: tab.routeName }" class="left-main-sidebar__link">
          <base-icon :name="tab.icon" />
          <span>{{ tab.title }}</span>
        </router-link>
      </div>
    </div>
    <theme-switch tabindex="6" />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitch from '@/components/ui/ThemeSwitch.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { useI18n } from 'vue-i18n';
import { RouteNames } from '@/router/routeNames';

const { t } = useI18n();

const tabs = [
  {
    icon: 'home',
    title: t('leftSidebar.main'),
    routeName: RouteNames.Home,
  },
  {
    icon: 'comment',
    title: t('leftSidebar.users'),
    routeName: RouteNames.Users,
  },
  {
    icon: 'user',
    title: t('leftSidebar.admins'),
    routeName: RouteNames.Admins,
  },
  {
    icon: 'chart',
    title: t('leftSidebar.statistics'),
    routeName: RouteNames.Statistics,
  },
  {
    icon: 'cog',
    title: t('leftSidebar.settings'),
    routeName: RouteNames.Settings,
  },
];
</script>

<style scoped lang="scss">
.left-main-sidebar {
  min-height: 100%;
  max-width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 20px 0 $color--sidebar-shadow;
  background-color: $color--sidebar;
  padding-top: 50px;
  padding-bottom: 60px;

  &__top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__brand {
    max-width: 206px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  &__links {
    width: 100%;
    margin-bottom: 20px;
  }

  &__link {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 22px;
    letter-spacing: 1.1px;
    color: $color--text;
    padding: 24px 30px;
    gap: 20px;

    &_selected {
      border-right: 3px solid $color--accent-secondary;
    }

    &:hover,
    &_selected {
      color: $color--selection-text;
      background-color: $color--selection;
    }
  }
}
</style>

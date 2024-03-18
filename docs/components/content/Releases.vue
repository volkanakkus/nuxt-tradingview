<template>
  <GithubReleases v-slot="{ releases }">
    <div
      v-for="(release, index) in releases"
      :key="release.name"
      class="release">
      <ProseH2 style="margin-top: 10px" :id="release.name">
        <div class="releases-head">
          {{ release.name }}
          <Badge v-if="index === 0" type="info"> Latest </Badge>
        </div>
      </ProseH2>

      <ContentRenderer style="zoom: 0.9" :value="release" />
      <div class="releases-footer">
        <a class="author" :href="release.author.url">
          <img style="height: 32px; width: 32px" :src="release.author.avatar" />
          {{ release.author.name }}
        </a>
        - Published on {{ new Date(release.date).toDateString() }}
      </div>
    </div>
  </GithubReleases>
</template>

<style>
.release {
  border-bottom-style: var(--prose-hr-style);
  border-bottom-width: var(--prose-hr-width);
  border-bottom-color: var(--prose-hr-color);
  margin-bottom: 50px;
  padding-bottom: 50px;
}

.releases-head {
  display: flex !important;
  align-items: center;
  gap: 14px;
}

.releases-footer {
  margin-top: 20px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  margin-top: 50px;
  color: var(--color-text-secondary);
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  margin-right: 5px;
}

.author img {
  border-radius: 50%;
}
</style>
